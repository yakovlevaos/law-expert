"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { Button, Card, Chip, SearchField, Spinner } from "@heroui/react";

import { DurationFilter } from "@/components/gamelib/DurationFilter";
import { FacetFilter } from "@/components/gamelib/FacetFilter";
import { GameDetails } from "@/components/gamelib/GameDetails";
import { SortSelect } from "@/components/gamelib/SortSelect";
import { ChevronDownIcon, CloseIcon } from "@/components/icons";
import type { CatalogQuery } from "@/lib/filters";
import { EMPTY_QUERY, buildSearchParams, hasActiveFilters } from "@/lib/filters";
import type { Facets, FacetKey, Game, NameRef } from "@/lib/types";
import { FACET_LABELS } from "@/lib/types";

/** Facets rendered as plain multi-selects; duration has its own control. */
const SIMPLE_FACETS: FacetKey[] = ["platforms", "modes", "genres", "competencies"];
const FACET_ORDER: FacetKey[] = [
  "platforms",
  "durations",
  "modes",
  "genres",
  "competencies",
];

const names = (refs: NameRef[]) => refs.map((ref) => ref.name);

/**
 * The one place a game's attributes are described. Both the table and the card
 * layout render from this list, so the two views cannot drift apart — which is
 * how the old mobile view ended up printing only the first character of the
 * playtime string. `sort` names the API ordering field where the column has one.
 */
const gameFields = (game: Game) => [
  { key: "platforms", label: "Платформа", values: names(game.platforms), sort: null },
  {
    key: "durations",
    label: "Продолжительность",
    values: [game.duration],
    sort: "duration_hours_min",
  },
  { key: "modes", label: "Режим игры", values: names(game.modes), sort: null },
  { key: "genres", label: "Жанр", values: names(game.genres), sort: null },
  {
    key: "competencies",
    label: "Компетенции",
    values: names(game.competencies),
    sort: null,
  },
];

/**
 * Covers can be missing two ways: no `cover_image` in the payload at all, or a
 * path whose file is absent from the backend's media directory — which happens
 * whenever a local media copy lags behind the database. Both land on the same
 * placeholder instead of a broken-image icon in the middle of the table.
 */
const GameCover = ({ game, className }: { game: Game; className: string }) => {
  const [hasFailed, setHasFailed] = useState(false);

  if (!game.cover_image || hasFailed) {
    return (
      <div
        className={`${className} grid place-items-center bg-[var(--surface-secondary)] px-2 text-center text-xs text-[var(--muted)]`}
      >
        Нет обложки
      </div>
    );
  }

  return (
    <Image
      src={game.cover_image}
      alt={`Обложка игры ${game.titles_list[0] ?? ""}`}
      width={240}
      height={320}
      className={className}
      onError={() => setHasFailed(true)}
    />
  );
};

/** Column header that also sorts, for the columns the API can order by. */
const SortableHeader = ({
  label,
  field,
  ordering,
  onSort,
}: {
  label: string;
  field: string;
  ordering: string;
  onSort: (value: string) => void;
}) => {
  const isAscending = ordering === field;
  const isDescending = ordering === `-${field}`;

  return (
    <button
      type="button"
      onClick={() => onSort(isAscending ? `-${field}` : field)}
      className="flex cursor-pointer items-center gap-1 font-semibold underline-offset-4 hover:underline"
      aria-label={`${label}: сортировать ${isAscending ? "по убыванию" : "по возрастанию"}`}
    >
      {label}
      <ChevronDownIcon
        className={`size-4 transition-transform duration-200 ${
          isDescending ? "rotate-180" : ""
        } ${isAscending || isDescending ? "" : "opacity-30"}`}
      />
    </button>
  );
};

type Props = {
  games: Game[];
  /** Total matching the current filters, as reported by the API. */
  total: number;
  /** Size of the catalog with no filters applied, for the idle counter. */
  catalogSize: number;
  facets: Facets;
  query: CatalogQuery;
  step: number;
};

/**
 * Filtering, searching, sorting and paging are done by the API; this component
 * only writes the visitor's choices into the URL and renders what the server
 * sent back. That keeps one implementation of the filter semantics instead of
 * two, and makes a filtered view linkable.
 */
export const GameCatalog = ({
  games,
  total,
  catalogSize,
  facets,
  query,
  step,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // The input stays local so typing is not gated on a round trip; the URL
  // catches up once the visitor pauses.
  const [search, setSearch] = useState(query.search);
  useEffect(() => setSearch(query.search), [query.search]);

  /** Any change other than "show more" restarts the list from the first page. */
  const navigate = (patch: Partial<CatalogQuery>) => {
    const next: CatalogQuery = {
      ...query,
      search,
      shown: patch.shown ?? step,
      ...patch,
    };
    const params = buildSearchParams(next, step);
    startTransition(() => {
      router.replace(params ? `${pathname}?${params}` : pathname, {
        scroll: false,
      });
    });
  };

  // Debounced search: every keystroke would otherwise be a request.
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onSearchChange = (value: string) => {
    setSearch(value);
    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => navigate({ search: value }), 300);
  };
  useEffect(
    () => () => {
      if (searchTimer.current) clearTimeout(searchTimer.current);
    },
    [],
  );

  const toggle = (key: FacetKey, id: number) => {
    const current = query.selected[key];
    navigate({
      selected: {
        ...query.selected,
        [key]: current.includes(id)
          ? current.filter((value) => value !== id)
          : [...current, id],
      },
    });
  };

  const clearFacet = (key: FacetKey) =>
    navigate({ selected: { ...query.selected, [key]: [] } });

  const clearAll = () => {
    setSearch("");
    // The sort order is a view preference, not a filter, so it survives a reset.
    navigate({ ...EMPTY_QUERY(step), ordering: query.ordering, search: "" });
  };

  const activeCount = FACET_ORDER.reduce(
    (count, key) => count + query.selected[key].length,
    0,
  );
  const isFiltered = hasActiveFilters(query);

  const optionName = (key: FacetKey, id: number) =>
    facets[key].find((option) => option.id === id)?.name ?? String(id);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <SearchField
            aria-label="Поиск по названию и описанию игры"
            value={search}
            onChange={onSearchChange}
            className="w-full max-w-md"
          >
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Поиск по названию" />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>

          <SortSelect
            value={query.ordering}
            onChange={(ordering) => navigate({ ordering })}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {SIMPLE_FACETS.map((key) => (
            <FacetFilter
              key={key}
              label={FACET_LABELS[key]}
              options={facets[key]}
              selected={query.selected[key]}
              onToggle={(id) => toggle(key, id)}
              onClear={() => clearFacet(key)}
            />
          ))}

          <DurationFilter
            options={facets.durations}
            selected={query.selected.durations}
            onToggleType={(id) => toggle("durations", id)}
            min={query.durationMin}
            max={query.durationMax}
            endless={query.endless}
            onRangeChange={(durationMin, durationMax) =>
              navigate({ durationMin, durationMax })
            }
            onEndlessChange={(endless) => navigate({ endless })}
            onClear={() =>
              navigate({
                selected: { ...query.selected, durations: [] },
                durationMin: null,
                durationMax: null,
                endless: false,
              })
            }
          />

          {isFiltered && (
            <Button variant="ghost" size="sm" onPress={clearAll}>
              Сбросить всё
            </Button>
          )}
        </div>

        {(activeCount > 0 ||
          query.durationMin !== null ||
          query.durationMax !== null ||
          query.endless) && (
          <ul className="flex flex-wrap gap-2" aria-label="Выбранные фильтры">
            {FACET_ORDER.flatMap((key) =>
              query.selected[key].map((id) => (
                <li key={`${key}-${id}`}>
                  <button
                    type="button"
                    onClick={() => toggle(key, id)}
                    className="cursor-pointer"
                    aria-label={`Убрать фильтр «${optionName(key, id)}»`}
                  >
                    <Chip variant="secondary" className="gap-1">
                      {optionName(key, id)}
                      <CloseIcon className="size-3" />
                    </Chip>
                  </button>
                </li>
              )),
            )}

            {(query.durationMin !== null || query.durationMax !== null) && (
              <li>
                <button
                  type="button"
                  onClick={() =>
                    navigate({ durationMin: null, durationMax: null })
                  }
                  className="cursor-pointer"
                  aria-label="Убрать фильтр по часам прохождения"
                >
                  <Chip variant="secondary" className="gap-1">
                    {query.durationMin !== null && query.durationMax !== null
                      ? `${query.durationMin}–${query.durationMax} ч`
                      : query.durationMin !== null
                        ? `от ${query.durationMin} ч`
                        : `до ${query.durationMax} ч`}
                    <CloseIcon className="size-3" />
                  </Chip>
                </button>
              </li>
            )}

            {query.endless && (
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ endless: false })}
                  className="cursor-pointer"
                  aria-label="Убрать фильтр «Без ограничения по времени»"
                >
                  <Chip variant="secondary" className="gap-1">
                    Без ограничения по времени
                    <CloseIcon className="size-3" />
                  </Chip>
                </button>
              </li>
            )}
          </ul>
        )}

        <p
          aria-live="polite"
          className="flex items-center gap-2 text-sm text-[var(--muted)]"
        >
          {isPending && <Spinner size="sm" aria-hidden="true" />}
          {isFiltered
            ? `Найдено игр: ${total} из ${catalogSize}`
            : `Игр в библиотеке: ${total}`}
        </p>
      </div>

      {games.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="font-semibold">
            Мы не нашли ни одной игры, соответствующей этому запросу.
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Попробуйте снять часть фильтров или изменить поисковый запрос.
          </p>
          <Button variant="secondary" className="mx-auto mt-5" onPress={clearAll}>
            Сбросить фильтры
          </Button>
        </Card>
      ) : (
        <div
          /* Dim the results rather than replacing them while the server
             answers: the list stays readable and nothing jumps. */
          className={
            isPending ? "opacity-60 transition-opacity duration-200" : undefined
          }
        >
          {/* Table for wide screens: the point of this page is comparing games
              across the same attributes, which a grid of cards does poorly. */}
          <div className="hidden overflow-x-auto xl:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-left">
                  <th scope="col" className="px-3 py-3">
                    <SortableHeader
                      label="Видеоигра"
                      field="title"
                      ordering={query.ordering}
                      onSort={(ordering) => navigate({ ordering })}
                    />
                  </th>
                  {gameFields(games[0]).map((field) => (
                    <th key={field.key} scope="col" className="px-3 py-3">
                      {field.sort ? (
                        <SortableHeader
                          label={field.label}
                          field={field.sort}
                          ordering={query.ordering}
                          onSort={(ordering) => navigate({ ordering })}
                        />
                      ) : (
                        <span className="font-semibold">{field.label}</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr
                    key={game.id}
                    className="border-b border-[var(--border)] align-top"
                  >
                    <td className="px-3 py-4">
                      <div className="flex flex-col gap-2">
                        <GameCover
                          game={game}
                          className="h-40 w-auto rounded-md object-cover"
                        />
                        <p className="font-semibold">{game.titles_list.join(" / ")}</p>
                        <GameDetails game={game} />
                      </div>
                    </td>
                    {gameFields(game).map((field) => (
                      <td key={field.key} className="px-3 py-4">
                        <ul className="flex flex-col gap-1">
                          {field.values.map((value) => (
                            <li key={value}>{value}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards below xl, where six columns cannot fit without a horizontal
              scroll — the same fields, stacked. */}
          <ul className="grid gap-5 sm:grid-cols-2 xl:hidden">
            {games.map((game) => (
              <li key={game.id}>
                <Card className="flex h-full flex-col gap-4 p-5">
                  <div className="flex gap-4">
                    <GameCover
                      game={game}
                      className="h-32 w-auto max-w-[45%] shrink-0 rounded-md object-cover"
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold break-words text-balance">
                        {game.titles_list.join(" / ")}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {game.duration}
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-[minmax(0,max-content)_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm">
                    {gameFields(game)
                      .filter((field) => field.key !== "durations")
                      .map((field) => (
                        <div key={field.key} className="contents">
                          <dt className="text-[var(--muted)]">{field.label}</dt>
                          <dd className="min-w-0 break-words">
                            {field.values.join(", ")}
                          </dd>
                        </div>
                      ))}
                  </dl>

                  <div className="mt-auto border-t border-[var(--border)] pt-2">
                    <GameDetails game={game} />
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      )}

      {games.length < total && (
        <Button
          variant="secondary"
          className="mx-auto"
          isPending={isPending}
          onPress={() => navigate({ shown: query.shown + step })}
        >
          Показать ещё ({total - games.length})
        </Button>
      )}
    </div>
  );
};
