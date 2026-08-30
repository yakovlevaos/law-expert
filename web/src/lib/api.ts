import type { CatalogQuery } from "./filters";
import type { Facets, FacetKey, Game, NameRef, Paginated } from "./types";
import { FACET_PARAM } from "./types";

/**
 * Base URL of the Django catalog API (the sibling `../genesis` repository).
 * Server-side only: every catalog request is made while rendering, so the
 * browser never talks to the API directly and CORS never enters the picture.
 */
export const API_BASE_URL = (
  process.env.API_BASE_URL ?? "http://127.0.0.1:8000/api/v1"
).replace(/\/+$/, "");

export const API_ORIGIN = new URL(API_BASE_URL).origin;

/** Games added to the list each time the visitor asks for more. */
export const PAGE_STEP = 30;

/** The backend's own cap on `page_size`. */
const MAX_PAGE_SIZE = 200;

/** Screenshot and cover paths can come back relative. */
export const mediaUrl = (path: string | null): string | null => {
  if (!path) return null;
  return path.startsWith("http") ? path : `${API_ORIGIN}${path}`;
};

const request = async <T>(url: string, revalidate: number): Promise<T> => {
  const response = await fetch(url, { next: { revalidate } });
  if (!response.ok) {
    throw new Error(`Запрос ${url} завершился со статусом ${response.status}`);
  }
  return (await response.json()) as T;
};

/**
 * Reference endpoints answer with a paginated envelope and are subject to the
 * 30-item page size — competencies already exceed it — so `next` has to be
 * followed or a facet silently loses options. Older deployments answer with a
 * bare array; that shape is still accepted.
 */
const requestList = async (path: string): Promise<NameRef[]> => {
  const items: NameRef[] = [];
  let url: string | null = `${API_BASE_URL}/${path}/?page_size=${MAX_PAGE_SIZE}`;

  for (let page = 0; url && page < 20; page += 1) {
    const data: NameRef[] | Paginated<NameRef> = await request<
      NameRef[] | Paginated<NameRef>
    >(url, 3600);

    if (Array.isArray(data)) return data;

    items.push(...data.results);
    url = data.next;
  }

  return items;
};

export const fetchFacets = async (): Promise<Facets> => {
  const [platforms, durations, modes, genres, competencies] = await Promise.all([
    requestList("platforms"),
    requestList("durations"),
    requestList("modes"),
    requestList("genres"),
    requestList("competencies"),
  ]);
  return { platforms, durations, modes, genres, competencies };
};

/**
 * The catalog state as the API expects it: repeated ids per facet, which the
 * backend's ModelMultipleChoiceFilter reads as "any of these", plus the
 * playtime bounds, free-text search and sort field.
 */
export const buildGamesQuery = (query: CatalogQuery): URLSearchParams => {
  const params = new URLSearchParams();

  for (const key of Object.keys(FACET_PARAM) as FacetKey[]) {
    for (const id of query.selected[key]) {
      params.append(FACET_PARAM[key], String(id));
    }
  }
  if (query.search.trim()) params.set("search", query.search.trim());
  if (query.ordering) params.set("ordering", query.ordering);
  if (query.durationMin !== null) {
    params.set("duration_min", String(query.durationMin));
  }
  if (query.durationMax !== null) {
    params.set("duration_max", String(query.durationMax));
  }
  // Games with no lower playtime bound recorded — the backend's `endless`.
  if (query.endless) params.set("endless", "true");

  return params;
};

export type GameResults = {
  games: Game[];
  /** Total matching the filters, which may exceed what was fetched. */
  total: number;
};

const withMediaUrls = (game: Game): Game => ({
  ...game,
  cover_image: mediaUrl(game.cover_image),
  screen_shots_list: game.screen_shots_list
    .map((shot) => mediaUrl(shot))
    .filter((shot): shot is string => Boolean(shot)),
});

/**
 * Filtering, searching and paging all happen on the server — the API does the
 * work, so the browser never holds the whole catalog and the results always
 * reflect the backend's own semantics rather than a reimplementation of them.
 */
export const fetchGames = async (
  query: CatalogQuery,
  limit: number,
): Promise<GameResults> => {
  const params = buildGamesQuery(query);
  const games: Game[] = [];
  let total = 0;

  params.set("page_size", String(Math.min(limit, MAX_PAGE_SIZE)));
  params.set("page", "1");
  let url: string | null = `${API_BASE_URL}/games/?${params}`;

  // A `limit` above the backend's page cap needs more than one request.
  for (let page = 0; url && games.length < limit && page < 20; page += 1) {
    const data: Paginated<Game> = await request<Paginated<Game>>(url, 300);
    total = data.count;
    games.push(...data.results);
    url = data.next;
  }

  return { games: games.slice(0, limit).map(withMediaUrls), total };
};
