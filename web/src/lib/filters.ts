import type { FacetKey, SelectedFacets } from "./types";
import { EMPTY_SELECTION, FACET_PARAM } from "./types";

/**
 * The catalog's state lives in the URL rather than in component state: a
 * filtered view can be linked to and bookmarked, the back button steps through
 * filter changes, and the server component can do the filtering because it
 * receives the same parameters.
 */

export const SEARCH_PARAM = "q";
export const SHOWN_PARAM = "n";
export const SORT_PARAM = "sort";
export const DURATION_MIN_PARAM = "dmin";
export const DURATION_MAX_PARAM = "dmax";
export const ENDLESS_PARAM = "endless";

const FACET_KEYS = Object.keys(FACET_PARAM) as FacetKey[];

/** Everything the catalog page needs to render one view. */
export type CatalogQuery = {
  selected: SelectedFacets;
  search: string;
  /** How many games the visitor has asked to see. */
  shown: number;
  /** API `ordering` value; empty means the backend's own default order. */
  ordering: string;
  /** Playtime bounds in hours. */
  durationMin: number | null;
  durationMax: number | null;
  /** Only games with no lower playtime bound recorded. */
  endless: boolean;
};

/** `ordering` values the backend accepts, from its `ordering_fields`. */
export const ORDERING_OPTIONS = [
  { value: "", label: "По названию (по умолчанию)" },
  { value: "title", label: "Название: А → Я" },
  { value: "-title", label: "Название: Я → А" },
  { value: "duration_hours_min", label: "Сначала короткие" },
  { value: "-duration_hours_min", label: "Сначала длинные" },
  { value: "-created_at", label: "Сначала добавленные" },
] as const;

const ALLOWED_ORDERING = new Set(ORDERING_OPTIONS.map((option) => option.value));

/**
 * Column → sort field, for the clickable table headers. The empty `ordering`
 * default is the backend's own sort, which files «Серия игр X» under X rather
 * than under «С», so plain `title` is offered as a separate explicit choice.
 */
export const SORTABLE_COLUMNS: Partial<Record<FacetKey | "title", string>> = {
  title: "title",
  durations: "duration_hours_min",
};

type ParamInput = Record<string, string | string[] | undefined>;

const asArray = (value: string | string[] | undefined): string[] => {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
};

const first = (params: ParamInput, key: string): string | undefined =>
  asArray(params[key])[0];

const parsePositive = (raw: string | undefined): number | null => {
  const value = Number.parseInt(raw ?? "", 10);
  return Number.isInteger(value) && value >= 0 ? value : null;
};

export const parseCatalogQuery = (
  params: ParamInput,
  step: number,
): CatalogQuery => {
  const selected: SelectedFacets = { ...EMPTY_SELECTION };
  for (const key of FACET_KEYS) {
    selected[key] = asArray(params[FACET_PARAM[key]])
      .flatMap((value) => value.split(","))
      .map((value) => Number.parseInt(value, 10))
      .filter((id) => Number.isInteger(id) && id > 0);
  }

  const rawShown = Number.parseInt(first(params, SHOWN_PARAM) ?? "", 10);
  const shown =
    Number.isInteger(rawShown) && rawShown >= step
      ? // Bounded so a hand-edited URL cannot ask for an unbounded fetch.
        Math.min(rawShown, step * 20)
      : step;

  const ordering = first(params, SORT_PARAM) ?? "";
  const durationMin = parsePositive(first(params, DURATION_MIN_PARAM));
  const durationMax = parsePositive(first(params, DURATION_MAX_PARAM));

  return {
    selected,
    search: first(params, SEARCH_PARAM) ?? "",
    shown,
    ordering: ALLOWED_ORDERING.has(ordering as never) ? ordering : "",
    // A reversed range would return nothing at all; drop the upper bound.
    durationMin,
    durationMax:
      durationMin !== null && durationMax !== null && durationMax < durationMin
        ? null
        : durationMax,
    endless: first(params, ENDLESS_PARAM) === "1",
  };
};

export const EMPTY_QUERY = (step: number): CatalogQuery => ({
  selected: EMPTY_SELECTION,
  search: "",
  shown: step,
  ordering: "",
  durationMin: null,
  durationMax: null,
  endless: false,
});

/** True when anything narrows the catalog, so the UI can offer a reset. */
export const hasActiveFilters = (query: CatalogQuery): boolean =>
  FACET_KEYS.some((key) => query.selected[key].length > 0) ||
  query.search.trim().length > 0 ||
  query.durationMin !== null ||
  query.durationMax !== null ||
  query.endless;

/** Serialises catalog state back into a query string for router navigation. */
export const buildSearchParams = (query: CatalogQuery, step: number): string => {
  const params = new URLSearchParams();

  for (const key of FACET_KEYS) {
    for (const id of query.selected[key]) {
      params.append(FACET_PARAM[key], String(id));
    }
  }
  if (query.search.trim()) params.set(SEARCH_PARAM, query.search.trim());
  if (query.ordering) params.set(SORT_PARAM, query.ordering);
  if (query.durationMin !== null) {
    params.set(DURATION_MIN_PARAM, String(query.durationMin));
  }
  if (query.durationMax !== null) {
    params.set(DURATION_MAX_PARAM, String(query.durationMax));
  }
  if (query.endless) params.set(ENDLESS_PARAM, "1");
  if (query.shown > step) params.set(SHOWN_PARAM, String(query.shown));

  return params.toString();
};
