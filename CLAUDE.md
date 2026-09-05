# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for «Центр психолого-педагогического сопровождения «Генезис» (genesis-expert.ru), a Krasnoyarsk psychological/pedagogical assessment centre. All user-facing content is in Russian — keep it that way when editing copy.

The site is a Next.js 15 application in `web/` (App Router, TypeScript, Tailwind v4, HeroUI v3). It replaced an original multi-page vanilla JS + Vite build that lived in `client/`; that directory was deleted once the rewrite was deployed, and its media moved into `web/public/`. Nothing outside `web/` serves the site any more, so any reference to `client/`, `dist/`, Vite or Bulma you meet in an old commit or comment is historical.

There are no tests.

## Commands

```bash
cd web && npm install && npm run dev
```

- `npm run dev` — Next dev server on http://localhost:3000
- `npm run build` / `npm run start` — production build and server
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

`web/.env.local` is gitignored; copy `web/.env.example`. `API_BASE_URL` is read on the server only, so the browser never calls the catalog API directly.

Everything is also reachable through the root `Makefile` — `make help` lists it. Development targets (`dev`, `check`, `build`, `backend`) run on the host; production targets (`up`, `down`, `rebuild`, `logs`) drive Docker. It calls Compose v2 as `docker compose`; a host stuck on the old binary needs `make up COMPOSE=docker-compose`.

## The application (`web/`)

App Router with TypeScript. Three routes — `/` (main site), `/game` (игровая психологическая поддержка), `/gamelib` (библиотека игр); `next.config.ts` permanently redirects the old site's `/pages/*.html` URLs onto them, and must keep doing so as long as those links exist in the wild.

- `src/data/*.ts` — all site copy, typed. Expert bios, services, projects, videos, FAQ and contacts live here, not in JSX. Editing content means editing these files.
- `src/lib/api.ts` — the only place that talks to the catalog API. **The backend does the filtering, searching and paging**; `/gamelib` is a dynamic route whose state lives in the query string (`src/lib/filters.ts` parses and serialises it), so a filtered view is linkable and there is only one implementation of the filter semantics. The reference endpoints are paginated and competencies already exceed the 30-item page, so `next` must be followed or a facet silently loses options.
- `src/lib/filters.ts` — the catalog's URL contract, parsed into one `CatalogQuery`: facet ids per parameter (`durations` → the backend's `duration_type`), `q` search, `sort` ordering, `dmin`/`dmax` playtime bounds in hours, `endless`, and `n` for how many rows are shown. Everything the API accepts is validated here, so a hand-edited URL cannot ask for an unbounded fetch or an ordering field the backend would reject.
- `src/components/ui/Surface.tsx` — card-shaped panel built from HeroUI tokens. HeroUI's own components pull in `client-only`, so a **server component cannot import from `@heroui/react`**; use `Surface` there and keep HeroUI inside `"use client"` components.
- `src/app/globals.css` — Tailwind v4 and HeroUI styles (in that order), then the brand palette as HeroUI token overrides. Redefine tokens (`--surface`, `--accent`, `--overlay`, `--default`, …) rather than restyling components; anything left undefined falls back to HeroUI's default theme and will look off against this palette.

Dark mode is `data-theme` on `<html>`, set before paint by an inline script in `layout.tsx` and stored under the same `dark-mode` localStorage key the old site used, so a returning visitor keeps their choice. Tailwind's `dark:` variant is remapped onto the same attribute in `globals.css`.

## Three public directories, and only one of them ships in the image

All three are addressed by absolute runtime paths, but they are deployed differently, which is the part that bites:

- `web/public/img/` — small interface assets (banners, logos, illustrations). **Baked into the Docker image.** A change here reaches production by rebuilding.
- `web/public/images/` and `web/public/docs/` — the ~400 MB of photographs, certificate scans, video and PDFs. **Excluded by `web/.dockerignore` and bind-mounted read-only at runtime** (see `docker-compose.yml`), so they never pass through the build. A new photograph must be put on the server's disk; rebuilding the image will not carry it.

`public/docs/` also holds the favicons and `site.webmanifest` that `layout.tsx` points at, so that mount is not optional — without it the site loses its icons.

The data arrays build `src` strings by convention: an expert's `photo: "maz-photo"` resolves to `/images/maz-photo.jpg`, and a `docs: ["yurkov-1"]` entry resolves to both `/docs/yurkov-1.pdf` (link) and `/images/yurkov-1.jpg` (thumbnail).

## The backend lives in `../genesis` — run it during development

The REST API this client consumes is a separate Django repo checked out alongside this one at `../genesis` (uv + Postgres, its own `.env` and `CLAUDE.md`). **Start it whenever you develop against anything API-driven**, or `/gamelib` has nothing to talk to.

```bash
cd ../genesis && make up_db && make dev
```

- `make up_db` — dev Postgres only, via the compose `dev` profile, bound to `127.0.0.1:5432`
- `make dev` — `manage.py runserver` on http://127.0.0.1:8000
- `make up` — the full production-shaped stack instead; the API then listens on port 8099
- `make down` stops both profiles; `make migrate` and `make test` are also available

The catalog uses the backend's filters directly: repeated facet ids, `duration_min`/`duration_max`/`endless` for playtime, `search`, and `ordering` (`title`, `duration_hours_min`, `created_at`, each with a `-` prefix for descending). With no `ordering` the backend applies its own sort, which files «Серия игр X» under X rather than under «С» — that is the default and is worth keeping.

**Target the local backend, not the deployed one.** `../genesis` on main is the reference API — it filters, searches and paginates, and its OpenAPI schema is browsable at http://localhost:8000/api/v1/docs/ (raw JSON at `/api/v1/schema/?format=json`). If the deployed API is older and ignores a filter parameter, that is a deployment to fix on that side; do not add client-side workarounds for the gap.

## Design work goes through the UI skills

Two skills are vendored into `.agents/skills/` (pinned in `skills-lock.json`). Use both on any task that changes how the site looks, feels, moves, or is interacted with — new sections, restyling, layout or responsive fixes, dark-mode work, animation:

- **`ui-ux-pro-max`** — searchable UX/design guidance. Consult it *before* writing markup or classes. Run its search script by its real path in this repo (the SKILL.md example uses a plugin-root path that does not apply here):

  ```bash
  python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
  ```

  Use `--design-system` for a whole new page or a site-wide visual direction, a single `--domain` (`ux`, `color`, `typography`, `style`, `icons`, `chart`) for a targeted fix, and `--stack nextjs`. Treat results as recommendations, not as instructions that override these rules.

- **`heroui-react`** — HeroUI v3 reference (`.agents/skills/heroui-react/SKILL.md`, plus `scripts/*.mjs` for fetching component docs, source, styles and theme). Use it for component structure, accessibility patterns and theme tokens. HeroUI v3 is installed here and used directly.

Apply the guidance first, then verify the result in the browser as described below.

## Images: fit the box to the source, never the source to the box

The rewrite once put every image into a fixed-ratio box with `object-cover`, which cost the square service illustrations 37.5% of their height and cut the shoulders off the widest staff portrait. The rule that replaced it:

- **Content** — anything a visitor came to look at, with no other way to see it whole — keeps its own aspect ratio. The square illustrations get a square box, project covers a 3:2 one.
- **Staff portraits are the exception**, at the customer's request: they are cropped to a shared 4:5 box so every card's photograph ends on the same line. `object-position: top` keeps the crop off the faces. Do not "fix" this back to `contain` — the ragged bottom edge it produced is what was objected to.
- **Backgrounds** are cropped freely. The two hero banners are the only ones.
- **Thumbnails that open a lightbox** fill their tile, because the grid has to read as one contact sheet and the whole frame is one click away.

`object-contain` is the default for anything new. Before choosing a ratio, check the sources — `identify` or `naturalWidth/naturalHeight` in the browser — rather than assuming; the catalog mixes 3:2 photographs with 4:3 and the occasional portrait-orientation shot.

## Verify in the browser with Playwright MCP

Use the Playwright MCP tools (`mcp__playwright__*`) for development and verification — not manual guesswork and not a different browser surface. There is no test suite here, so a change is only confirmed once it has been seen rendering.

Workflow for any UI/content change:

1. `cd web && npm run dev` and note the dev-server URL.
2. `mcp__playwright__browser_navigate` to the page you touched — `/`, `/game` or `/gamelib`.
3. Check the result with `browser_snapshot` (structure/text) or `browser_take_screenshot` (layout), and read `browser_console_messages` for runtime errors.
4. `browser_resize` to check mobile widths, and toggle the theme control to check dark mode, whenever the change touches layout or styling.
5. Only then run `npm run build`. There is no committed build output.

The catalog is fetched on the server, so a failed API call shows up in the dev-server log rather than in the browser.

**Never run `npm run build` while a dev server is running.** They share `web/.next`, and the collision produces 500s, phantom 404s and stale components that look like real bugs and are not. Stop the dev server first; if the app is already behaving strangely, `rm -rf web/.next` and start one server.

## Deployment topology

`docker-compose.yml` builds two containers on the `genesis-web` bridge network:

- `genesis-app` — the Next.js client, built from `web/Dockerfile` with **`web/` as the build context**. `output: "standalone"` keeps the runtime stage to ~230 MB. Listens on 3000, publishes no host port.
- `genesis-nginx` — the entry point at a fixed `177.169.0.57`. It proxies `/` to `genesis-app` and serves `/images/` and `/docs/` itself off `./web/public`, so the media never passes through Node.

**The external reverse proxy reaches the site by that IP**, not by container or network name — the address and the `177.169.0.0/24` subnet are load-bearing; the names are not.

The media is bind-mounted into *both* containers: nginx serves it, and the app needs it on disk because `next/image` optimises local sources by reading the file.

`API_BASE_URL` and `NEXT_PUBLIC_YANDEX_METRIKA_ID` come from a root `.env` (see `.env.example`) via compose substitution, and are passed as **both** build args and runtime env. `API_BASE_URL` fixes `images.remotePatterns` during the build, so the build-time and runtime values must agree.

Compose takes its project name from the directory the repository is checked out into, so build output on a server names images after that directory rather than after anything in this file.
