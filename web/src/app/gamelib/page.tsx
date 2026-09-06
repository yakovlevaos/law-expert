import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GameCatalog } from "@/components/gamelib/GameCatalog";
import { GameLibFaq } from "@/components/gamelib/GameLibFaq";
import { GamepadIcon, TelegramIcon, VkIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeToggle } from "@/components/theme";
import { Section } from "@/components/ui/Section";
import { Surface } from "@/components/ui/Surface";
import { PHONES, SOCIAL } from "@/data/site";
import { PAGE_STEP, fetchFacets, fetchGames } from "@/lib/api";
import { EMPTY_QUERY, parseCatalogQuery } from "@/lib/filters";

export const metadata: Metadata = {
  title: "Библиотека игр и проработка компетенций",
  description:
    "Картотека видеоигр для психологов и родителей: платформы, продолжительность, режимы, жанры и компетенции, которые прорабатывает каждая игра.",
};

/*
 * The route is dynamic: filters live in the query string, so it renders per
 * request. Caching sits on the API calls themselves (see lib/api.ts) — the
 * reference lists for an hour, game queries for five minutes — so repeated
 * filter combinations are served without hitting the backend again.
 */

const FOOTER_LINKS = [{ href: "/game", label: "Центр игровой психологической поддержки" }];

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function GameLibraryPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = parseCatalogQuery(params, PAGE_STEP);

  let results = null;
  let facets = null;
  let catalogSize = 0;
  let failed = false;

  try {
    // `catalogSize` is the unfiltered total, so the counter can say
    // "Найдено игр: 12 из 144" without a second source of truth.
    const [fetched, referenceLists, everything] = await Promise.all([
      fetchGames(query, query.shown),
      fetchFacets(),
      fetchGames(EMPTY_QUERY(PAGE_STEP), 1),
    ]);
    results = fetched;
    facets = referenceLists;
    catalogSize = everything.total;
  } catch {
    failed = true;
  }

  return (
    <>
      <header className="sticky top-0 z-30 bg-[var(--chrome)] text-[var(--chrome-foreground)] shadow-sm">
        <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-3 py-2 sm:px-5">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="Центр «Генезис» — на главную"
          >
            <Image
              src="/img/genesis-logo.png"
              alt=""
              width={80}
              height={80}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          {/* Same stand-in as SiteHeader: below `sm` the wordmark cannot fit,
              so the way through to the method travels as an icon beside the
              site logo rather than disappearing off the bar. */}
          <Link
            href="/game"
            className="grid size-10 shrink-0 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white sm:hidden"
            aria-label="Методика: центр игровой психологической поддержки"
          >
            <GamepadIcon className="size-6" />
          </Link>

          <p className="hidden min-w-0 flex-1 text-center text-base font-semibold md:block">
            Библиотека игр и проработка компетенций
          </p>

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <Link
              href="/game"
              /* Below `sm` the bar cannot hold this 136px logo and both social
                 icons at once — the theme toggle was the thing that got
                 crushed. The same trade SiteHeader makes, and the route
                 survives: the footer links to /game in words. */
              className="hidden shrink-0 transition-opacity hover:opacity-80 sm:block"
              aria-label="Методика: центр игровой психологической поддержки"
            >
              <Image
                src="/img/game-centre-logo.png"
                alt=""
                width={200}
                height={80}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
            {/* Grouped, and spaced tighter than the rest of the bar, so the
                two read as one set of social links rather than as two
                unrelated controls — the same arrangement as SiteHeader, which
                this page's header otherwise mirrors by hand. */}
            <div className="flex items-center gap-1">
              <a
                href={SOCIAL.vkGameLib}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white sm:size-11"
                aria-label="Заметили ошибку? Напишите в группу ВКонтакте (откроется в новой вкладке)"
              >
                <VkIcon className="size-6" />
              </a>
              <a
                href={SOCIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white sm:size-11"
                aria-label="Канал в Telegram (откроется в новой вкладке)"
              >
                <TelegramIcon className="size-6" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="content">
        <Section
          title="Библиотека игр"
          lead="Перед организацией работы специалистам-психологам рекомендуется пройти игру самостоятельно. Заметили ошибку — напишите в нашу группу ВКонтакте."
        >
          <div className="mb-10">
            <h3 className="text-xl font-bold">Частые вопросы</h3>
            <GameLibFaq />
          </div>

          {failed || !results || !facets ? (
            <Surface className="p-8 text-center">
              <p className="font-semibold">Каталог сейчас недоступен.</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Не удалось получить данные от сервера библиотеки игр.
                Попробуйте обновить страницу немного позже.
              </p>
            </Surface>
          ) : (
            <GameCatalog
              games={results.games}
              total={results.total}
              catalogSize={catalogSize}
              facets={facets}
              query={query}
              step={PAGE_STEP}
            />
          )}
        </Section>
      </main>

      <SiteFooter
        links={FOOTER_LINKS}
        phones={[PHONES.general, PHONES.director]}
        vkHref={SOCIAL.vkGameLib}
      />
    </>
  );
}
