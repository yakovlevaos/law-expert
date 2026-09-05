# Genesis Expert

Marketing site for «Центр психолого-педагогического сопровождения «Генезис»
(genesis-expert.ru), a Krasnoyarsk psychological and pedagogical assessment
centre. All user-facing content is in Russian.

Next.js 15 (App Router) · React 19 · TypeScript 5.9 · Tailwind CSS v4 ·
HeroUI v3 · nginx · Docker

The catalog API it reads is a separate repository,
[law-expert-api](https://github.com/yakovlevaos/law-expert-api), checked out
alongside this one as `../genesis`.

## Quick start

```bash
cd web && npm install && npm run dev   # http://localhost:3000
```

Anything API-driven needs the backend running as well:

```bash
make backend    # ../genesis: dev database + runserver on :8000
```

`web/.env.local` is gitignored; copy `web/.env.example` if you need to point the
client at a different API.

## Common commands

Everything is reachable through the root `Makefile`; `make help` lists it.
Development targets run on the host, production targets drive Docker.

| Command          | What it does                                     |
| ---------------- | ------------------------------------------------ |
| `make dev`       | Next dev server on http://localhost:3000         |
| `make backend`   | Start the catalog API from `../genesis`          |
| `make check`     | ESLint + `tsc --noEmit`                          |
| `make build`     | Production build, outside Docker                 |
| `make start`     | Serve that build on http://localhost:3000        |
| `make up`        | Build the images and start nginx + the client    |
| `make down`      | Stop and remove the containers                   |
| `make rebuild`   | Full recreate — needed when the network changes  |
| `make logs`      | Follow the client's logs                         |
| `make ps`        | Container status                                 |

Compose v2 is assumed. A host stuck on the old standalone binary needs
`make up COMPOSE=docker-compose`.

## Configuration

A root `.env` (see `.env.example`) feeds compose substitution. Both values are
passed as **build args and runtime env**, and the two must agree:

| Variable | Purpose |
| -------- | ------- |
| `API_BASE_URL` | Catalog API. Also fixes `images.remotePatterns` during the build, so a runtime value the build did not know about makes `next/image` reject the backend's covers. |
| `NEXT_PUBLIC_YANDEX_METRIKA_ID` | Metrika counter, inlined into the client bundle at build time. Leave empty to build an image with no counter. |

`API_BASE_URL` is read on the server only, so the browser never calls the API
directly.

## Production

```bash
make up
```

Two containers on the `genesis-web` bridge network:

- **`genesis-app`** — the Next.js client, built from `web/Dockerfile` with `web/`
  as the build context. `output: "standalone"` keeps the runtime stage to
  ~233 MB. Listens on 3000 and publishes no host port.
- **`genesis-nginx`** — the entry point at a fixed **`177.169.0.57`**. It proxies
  `/` to `genesis-app` and serves `/images/` and `/docs/` itself off
  `./web/public`.

**The external reverse proxy reaches the site by that IP**, not by container or
network name — the address and the `177.169.0.0/24` subnet are load-bearing.

### Media

The ~417 MB under `web/public/images` and `web/public/docs` is excluded from the
build context by `web/.dockerignore` and bind-mounted read-only instead, into
*both* containers: nginx serves it, and the app needs it on disk because
`next/image` optimises local sources by reading the file. `web/public/docs` also
holds the favicons and `site.webmanifest`, so that mount is not optional.

The files are tracked in git, so a new photograph reaches the server through the
deploy checkout rather than through the image. Only `web/public/img` (3 MB of
interface assets) is baked in and needs a rebuild.

## Continuous deployment

A push to `main` deploys automatically. Pull requests run the checks but never
reach the server.

What a push to `main` triggers, in order:

1. **`check`** — `npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`
   on Node 22, matching the Dockerfile's base image. `ci` rather than `install`,
   so a `package-lock.json` that has drifted from `package.json` fails the run
   instead of being rewritten. `API_BASE_URL` is pinned to the production value
   because the build bakes `images.remotePatterns` in from it; nothing is
   fetched from it, as only `/gamelib` talks to the API and it is rendered on
   demand.
2. **`docker`** — `docker compose build app`, so the build context and build
   args are checked along with the Dockerfile, before the server is touched.
3. **`deploy`** — runs only if both succeeded. It writes `DEPLOY_SSH_KEY` to the
   runner, SSHes in as `DEPLOY_USER@DEPLOY_HOST`, and runs `deploy/deploy.sh` in
   `DEPLOY_PATH`.

The job belongs to the `production` environment (add a required reviewer there
to gate deploys) and to a non-cancelling concurrency group, so two pushes queue
instead of racing and an older commit cannot overtake a newer one.

On the server, `deploy/deploy.sh`:

1. refuses to run if `.env` is missing — the container would not start;
2. `git fetch --prune origin main`, then `git checkout -B main origin/main`
   (a plain `reset --hard` would move whichever branch is checked out and leave
   the server on a stale branch name);
3. `docker compose up -d --build` — a rebuild rather than an image swap, because
   the photographs arrive through bind mounts and a release that moves them has
   to repoint the mounts too;
4. polls `http://177.169.0.57/` for up to `HEALTH_TIMEOUT` (180s); nginx
   publishes no host port, so the check goes over the compose network;
5. on failure, dumps the container logs, resets to the previous commit,
   rebuilds, and exits non-zero.

If the target commit is already checked out it only makes sure the stack is up,
so re-running a deploy is harmless. Unlike the backend there are no migrations,
so the rollback is complete: the previous commit rebuilds to exactly what was
running before.

`deploy/deploy.sh` keeps its whole body in a `main()` function on purpose — the
update rewrites that very file, and bash reads a plain script incrementally, so
a release that changes the script could otherwise resume mid-file.

Run it by hand, or watch a run, with:

```bash
./deploy/deploy.sh
gh run watch <run-id> --repo yakovlevaos/law-expert
```

### Repository secrets

| Secret | Value |
| ------ | ----- |
| `DEPLOY_HOST` | Server hostname or IP |
| `DEPLOY_USER` | SSH user, must be in the `docker` group |
| `DEPLOY_PATH` | Absolute path of the checkout on the server |
| `DEPLOY_SSH_KEY` | Private key the runner authenticates with |
| `DEPLOY_KNOWN_HOSTS` | Output of `ssh-keyscan <host>` |
| `DEPLOY_PORT` | Optional, defaults to 22 |

`DEPLOY_SSH_KEY` is the **private** half of a dedicated key pair; its public half
goes into `~/.ssh/authorized_keys` of `DEPLOY_USER` on the server. Give it no
passphrase — the runner connects with `BatchMode=yes` and cannot answer a
prompt.

```bash
ssh-keygen -t ed25519 -C "github-actions" -f deploy_runner -N ''
gh secret set DEPLOY_SSH_KEY < deploy_runner    # never paste it by hand
ssh-copy-id -i deploy_runner.pub user@example.com
ssh-keyscan -H example.com | gh secret set DEPLOY_KNOWN_HOSTS
```

Set the secret from the file rather than the clipboard: a key whose line breaks
were lost fails on the runner with `Load key: error in libcrypto`, before it
ever reaches the server.

The repository is public, so the server fetches over HTTPS and needs no
credentials of its own. If it ever becomes private, give it a read-only key
registered under the repository's Deploy keys.

### Server prerequisites

The checkout at `DEPLOY_PATH` must already exist, sit on `main`, and contain a
`.env`. `.env` is gitignored, so neither the checkout nor the rebuild touches
the server's configuration. Docker with the Compose plugin must be installed.

Compose takes its project name from the directory the checkout lives in, so
build output names images after that directory rather than after anything in
`docker-compose.yml`.

### The first deploy

`main` carries the Next.js client, so the pipeline is safe to arm. Adding the
secrets is what turns it on: until they exist the `deploy` job stops at its
preflight check, naming the secrets that are missing, and the server is
untouched.

Before adding them, make sure the checkout at `DEPLOY_PATH` is on `main` and has
a `.env` — the first automatic run fast-forwards it and rebuilds. Rehearse once
by running `./deploy/deploy.sh` there by hand; it is the same code path, and a
missing `.env` or a user outside the `docker` group shows up immediately rather
than in a red pipeline.

## Layout

```
web/                 The application
  src/app/           Routes: / , /game , /gamelib , robots.ts , sitemap.ts
  src/components/    UI, grouped by page
  src/data/          All site copy, typed — editing content means editing these
  src/lib/           api.ts (the only caller of the API), filters.ts (URL contract)
  public/img/        Interface assets — baked into the image
  public/images/     Photographs and video — bind-mounted
  public/docs/       PDFs, favicons, webmanifest — bind-mounted
deploy/
  deploy.sh          Server-side deploy with rollback
  nginx/             Entry point: proxy + media
.github/workflows/   CI
```

`next.config.ts` permanently redirects the old site's `/pages/*.html` URLs onto
the new routes, and must keep doing so as long as those links exist in the wild.

Development conventions, the image-cropping rules and the browser verification
workflow live in [CLAUDE.md](CLAUDE.md).
