# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for «Центр психолого-педагогического сопровождения «Генезис» (genesis-expert.ru), a Krasnoyarsk psychological/pedagogical assessment centre. All user-facing content is in Russian — keep it that way when editing copy.

There are **two clients in this repository**, and it matters which one you are in:

- `web/` — the Next.js 15 rewrite (App Router, TypeScript, Tailwind v4, HeroUI v3). This is where new work goes.
- `client/` — the original multi-page vanilla JS + Vite + Tailwind v3 site. Still the deployed artifact (nginx bind-mounts `client/dist`), so it is kept working until the cutover; treat it as legacy and do not build new features there.

Neither client has tests.

## Commands

The Next.js client, in `web/`:

```bash
cd web && npm install && npm run dev
```

- `npm run dev` — Next dev server on http://localhost:3000
- `npm run build` / `npm run start` — production build and server
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

`web/.env.local` is gitignored; copy `web/.env.example`. `API_BASE_URL` is read on the server only, so the browser never calls the catalog API directly.

The legacy Vite client, in `client/`:

- `npm run dev` — Vite dev server (also `make dev` from `client/`)
- `npm run build` — build into `client/dist/`
- `npm run preview` — serve the built `dist/`

Everything is also reachable through the root `Makefile` — `make help` lists it. Development targets (`dev`, `check`, `build`, `backend`) run on the host; production targets (`up`, `down`, `rebuild`, `logs`) drive Docker. It calls Compose v2 as `docker compose`; a host stuck on the old binary needs `make up COMPOSE=docker-compose`.

## The Next.js client (`web/`)

App Router with TypeScript. Three routes mirror the old pages — `/` (main site), `/game` (игровая психологическая поддержка), `/gamelib` (библиотека игр); `next.config.ts` permanently redirects the old `/pages/*.html` URLs onto them.

- `src/data/*.ts` — all site copy, typed. Expert bios, services, projects, videos, FAQ and contacts live here, not in JSX, the same way the old site kept them in JS arrays. Editing content means editing these files.
- `src/lib/api.ts` — the only place that talks to the catalog API. **The backend does the filtering, searching and paging**; `/gamelib` is a dynamic route whose state lives in the query string (`src/lib/filters.ts` parses and serialises it), so a filtered view is linkable and there is only one implementation of the filter semantics. The reference endpoints are paginated and competencies already exceed the 30-item page, so `next` must be followed or a facet silently loses options.
- `src/components/ui/Surface.tsx` — card-shaped panel built from HeroUI tokens. HeroUI's own components pull in `client-only`, so a **server component cannot import from `@heroui/react`**; use `Surface` there and keep HeroUI inside `"use client"` components.
- `src/lib/filters.ts` — the catalog's URL contract, parsed into one `CatalogQuery`: facet ids per parameter (`durations` → the backend's `duration_type`), `q` search, `sort` ordering, `dmin`/`dmax` playtime bounds in hours, `endless`, and `n` for how many rows are shown. Everything the API accepts is validated here, so a hand-edited URL cannot ask for an unbounded fetch or an ordering field the backend would reject.
- `src/app/globals.css` — Tailwind v4 and HeroUI styles (in that order), then the brand palette as HeroUI token overrides. Redefine tokens (`--surface`, `--accent`, `--overlay`, `--default`, …) rather than restyling components; anything left undefined falls back to HeroUI's default theme and will look off against this palette.

Dark mode is `data-theme` on `<html>`, set before paint by an inline script in `layout.tsx` and stored under the same `dark-mode` localStorage key the old site used, so a returning visitor keeps their choice. Tailwind's `dark:` variant is remapped onto the same attribute in `globals.css`.

`web/public/images` and `web/public/docs` are symlinks into `client/public/`, so the ~400 MB of photos and PDFs is not duplicated. When `client/` is finally retired, move the real directories over.

## The backend lives in `../genesis` — run it during development

The REST API this client consumes is a separate Django repo checked out alongside this one at `../genesis` (uv + Postgres, its own `.env` and `CLAUDE.md`). **Start it whenever you develop against anything API-driven** — otherwise `pages/gamelib.html` has nothing local to talk to and silently falls back to hitting production.

```bash
cd ../genesis && make up_db && make dev
```

- `make up_db` — dev Postgres only, via the compose `dev` profile, bound to `127.0.0.1:5432`
- `make dev` — `manage.py runserver` on http://127.0.0.1:8000
- `make up` — the full production-shaped stack instead; the API then listens on port 8099
- `make down` stops both profiles; `make migrate` and `make test` are also available

The catalog uses the backend's filters directly: repeated facet ids, `duration_min`/`duration_max`/`endless` for playtime, `search`, and `ordering` (`title`, `duration_hours_min`, `created_at`, each with a `-` prefix for descending). With no `ordering` the backend applies its own sort, which files «Серия игр X» under X rather than under «С» — that is the default and is worth keeping.

**Target the local backend, not the deployed one.** `../genesis` on main is the reference API — it filters, searches and paginates, and its OpenAPI schema is browsable at http://localhost:8000/api/v1/docs/ (raw JSON at `/api/v1/schema/?format=json`). The currently deployed production API is older and silently ignores every filter parameter, so **`/gamelib` filters will do nothing until production is updated**; do not add client-side workarounds for that gap.

The old `client/` is a different story: `assets/js/gamelib.js` hardcodes the production origin, so pointing that page at a local API means temporarily editing the base URL — **do not commit that change**, and never commit it into `client/dist/`. With `DEBUG` on and an empty `CORS_ALLOWED_ORIGINS`, the backend accepts any origin.

## Design work goes through the UI skills

Two skills are vendored into `.agents/skills/` (pinned in `skills-lock.json`). Use both on any task that changes how the site looks, feels, moves, or is interacted with — new sections, restyling, layout or responsive fixes, dark-mode work, animation:

- **`ui-ux-pro-max`** — searchable UX/design guidance. Consult it *before* writing markup or classes. Run its search script by its real path in this repo (the SKILL.md example uses a plugin-root path that does not apply here):

  ```bash
  python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
  ```

  Use `--design-system` for a whole new page or a site-wide visual direction, a single `--domain` (`ux`, `color`, `typography`, `style`, `icons`, `chart`) for a targeted fix, and a `--stack` matching the client you are in: `nextjs` or `react` for `web/`, `html-tailwind` for `client/`. Treat results as recommendations, not as instructions that override these rules.

- **`heroui-react`** — HeroUI v3 reference (`.agents/skills/heroui-react/SKILL.md`, plus `scripts/*.mjs` for fetching component docs, source, styles and theme). Use it for component structure, accessibility patterns and theme tokens.

  In `web/` HeroUI v3 is installed and used directly — that app is React with Tailwind v4, which is exactly what the skill targets. In `client/` it stays a reference only: that site is vanilla JS on Tailwind 3.4 with no React, so port the patterns to plain HTML/Tailwind classes there and translate any Tailwind v4 / oklch syntax to v3 equivalents.

Apply the guidance first, then verify the result in the browser as described below.

## Verify in the browser with Playwright MCP

Use the Playwright MCP tools (`mcp__playwright__*`) for development and verification — not manual guesswork and not a different browser surface. There is no test suite here, so a change is only confirmed once it has been seen rendering.

Workflow for any UI/content change:

1. `cd web && npm run dev` (or `cd client && npm run dev` for the legacy site) and note the dev-server URL.
2. `mcp__playwright__browser_navigate` to the page you touched — `/`, `/game`, `/gamelib` in `web/`; `/`, `/pages/game.html`, `/pages/gamelib.html` in `client/`.
3. Check the result with `browser_snapshot` (structure/text) or `browser_take_screenshot` (layout), and read `browser_console_messages` for runtime errors.
4. `browser_resize` to check mobile widths, and toggle the `.light-switch` to check dark mode, whenever the change touches layout or styling.
5. Only then run `npm run build`. In `client/` the regenerated `client/dist/` must be committed with the source; `web/` has no committed build output.

On the game library page also watch `browser_network_requests`. In `web/` the catalog is fetched on the server, so a failure shows up in the dev-server log rather than in the browser; in `client/` the page calls the hardcoded production API from the browser, so failures there are backend or CORS.

## Build output is committed (legacy only)

`client/dist/` is tracked in git and every source change under `client/` is expected to be followed by `npm run build` with the regenerated `dist/` committed in the same commit — check `git log --name-only` for the pattern: source file + its hashed `dist/assets/*` twin.

That directory is **no longer deployed**: nginx now proxies to the Next.js container instead of bind-mounting it. Keep the habit only while the legacy site is still being kept alive; `web/` is built inside its Docker image and commits nothing.

## Vite entry points

Legacy `client/` only.

`client/vite.config.js` declares five rollup inputs. Anything not reachable from one of them will not be bundled:

- `index.html` → `assets/js/index.js` (plus an inline module importing `assets/js/cards.js`)
- `pages/game.html` → `assets/js/game.js`
- `pages/gamelib.html` → `assets/js/index.js` **and** `assets/js/gamelib.js`
- `assets/js/game.js` and `assets/js/gamelib.js` are also declared as standalone JS inputs

Adding a new page means adding both the HTML file and its `resolve(__dirname, ...)` input.

## Two image directories — they mean different things

- `client/assets/img/` — imported/referenced from source, hashed by Vite at build time.
- `client/public/images/`, `client/public/docs/` — copied verbatim into `dist/`, addressed by **absolute runtime paths** (`/images/foo.jpg`, `/docs/foo.pdf`).

The data arrays in `index.js`, `game.js`, `cards.js` and `experts.js` build `src` strings by convention: an expert's `photo: "maz-photo"` resolves to `/images/maz-photo.jpg`, a `docs: ["yurkov-1"]` entry resolves to both `/docs/yurkov-1.pdf` (link) and `/images/yurkov-1.jpg` (thumbnail). **New photos, certificate scans and videos go in `client/public/images/` (and `public/docs/` for PDFs)** — putting them only in `assets/img/` yields 404s at runtime.

## Content lives in JS data arrays, not in HTML

Legacy `client/` only; the equivalent in `web/` is `src/data/*.ts`.

Most page sections are rendered by string-template functions from hardcoded arrays. To change site content you edit these arrays, not the markup:

- `assets/js/index.js` — `expertsData` (staff carousel) and `cardData` (services carousel), plus the dark-mode toggle wiring
- `assets/js/game.js` — `expertsGamesData`, a separate, partly duplicated staff list for the videogame-consulting page
- `assets/js/cards.js` — `projects` (grant/project cards), each rendered as a three-tab card with its own Swiper gallery; media entries are bare names (`"mirror1"` → `.jpeg`) unless they carry an extension (`"mirror5.mp4"` → video)
- `assets/js/experts.js` — shared `loadExperts` / `initializeSwiper` / `initialRendering` used by both `index.js` and `game.js`; `initialRendering` truncates any bio over 50 words behind a «Узнать больше» toggle
- `assets/js/modal.js` — `initModal()` returns an `openModal(src)` that switches between `<img>` and `<video>` by file extension

## The game library page is API-driven

This section describes the legacy `client/` only; `web/` filters server-side. There, `assets/js/gamelib.js` is the one dynamic surface: it fetches from a Django-style REST API on the **production origin, hardcoded** — `https://genesis-expert.ru/api/v1/{games,genres,modes,platforms,competencies,durations}/` — with cursor-style pagination (`data.next`) driven by an infinite-scroll listener. The API lives in a separate backend repo (`../genesis` — see above); there is no proxy or env-based base URL here, so the page hits production even from `npm run dev`. A stale LAN URL (`http://192.168.1.176:8099/...`) is still referenced as a sentinel in the scroll handler.

## Styling in the legacy client

Tailwind (`darkMode: "class"`) with base-layer element styles in `client/assets/css/style.css`. Dark mode is set by an inline blocking script in each page `<head>` reading `localStorage["dark-mode"]`, and toggled by `.light-switch` inputs — the toggle logic is duplicated in `index.js` and inline in `pages/game.html`. Bulma is additionally loaded from a CDN in each page head purely for the `.tabs` / `.table` classes used by the project cards; Tailwind's `content` globs cover `./*.html`, `./pages/**`, `./assets/**` only.

## Deployment topology

`docker-compose.yml` builds two containers on the `genesis-web` bridge network:

- `genesis-app` — the Next.js client, built from `web/Dockerfile` with the **repository root as the build context** (the app's `public/` symlinks into `client/public`). `output: "standalone"` keeps the runtime stage to ~230 MB. Listens on 3000, publishes no host port.
- `genesis-nginx` — the entry point at a fixed `177.169.0.57`. It proxies `/` to `genesis-app` and serves `/images/` and `/docs/` itself off `./client/public`, so the ~400 MB of photos and video never passes through Node.

**The external reverse proxy reaches the site by that IP**, not by container or network name — the address and the `177.169.0.0/24` subnet are load-bearing; the names are not.

The media is bind-mounted into *both* containers: nginx serves it, and the app needs it on disk because `next/image` optimises local sources by reading the file. `.dockerignore` keeps it out of the build context.

`API_BASE_URL` and `NEXT_PUBLIC_YANDEX_METRIKA_ID` come from a root `.env` (see `.env.example`) via compose substitution, and are passed as **both** build args and runtime env. `API_BASE_URL` fixes `images.remotePatterns` during the build, so the build-time and runtime values must agree.

The root `package-lock.json` is a vestigial empty stub; ignore it.
