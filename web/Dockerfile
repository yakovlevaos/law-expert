# syntax=docker/dockerfile:1
#
# Built from `web/`, which is self-contained. The ~400 MB of photos, PDFs and
# video under public/ is excluded by .dockerignore and bind-mounted read-only at
# runtime instead (see docker-compose.yml), which keeps builds and pulls fast.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./

# A flaky link to the registry used to fail the whole build: npm reports it as
# "Exit handler never called!", which reads like a crash but is just an install
# that was killed or stalled. This stage takes ~40s on a healthy connection and
# has been seen to give up after 117s on the server, then succeed on a retry, so
# the download is given room to recover instead. The cache mount means a retry
# re-uses whatever was already fetched, and audit and funding are two round
# trips a build has no use for.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund \
        --fetch-retries=5 \
        --fetch-retry-maxtimeout=120000 \
        --fetch-timeout=600000

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

# Both values are needed at build time, for different reasons: the pages are
# prerendered here and fetch the catalog, and NEXT_PUBLIC_* is inlined into the
# client bundle. API_BASE_URL also fixes `images.remotePatterns`, so the same
# value has to be passed to the runtime stage or image optimisation will reject
# the backend's URLs.
ARG API_BASE_URL=https://genesis-expert.ru/api/v1
ARG NEXT_PUBLIC_YANDEX_METRIKA_ID=
ENV API_BASE_URL=$API_BASE_URL \
    NEXT_PUBLIC_YANDEX_METRIKA_ID=$NEXT_PUBLIC_YANDEX_METRIKA_ID \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mount points for the media bind mounts; next/image reads these from disk when
# optimising, so the files have to be present in this container too.
RUN mkdir -p ./public/images ./public/docs && chown -R nextjs:nodejs ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
