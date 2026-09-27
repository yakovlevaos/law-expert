#!/usr/bin/env bash
#
# Server-side deploy: move the checkout to origin/<branch>, rebuild the stack,
# and roll the code back if the site does not come back up.
#
# Run from anywhere; it resolves the repository root itself. Intended to be
# invoked over SSH by .github/workflows/ci.yml, but it is safe to run by hand.
#
# The whole body lives in main() on purpose: the update rewrites this very
# file, and bash reads a plain script incrementally, so a release that changes
# deploy.sh could otherwise resume mid-file and execute garbage. Wrapping it in
# a function forces bash to parse everything before the first command runs.
set -euo pipefail

main() {
    local BRANCH="${DEPLOY_BRANCH:-main}"
    local HEALTH_TIMEOUT="${HEALTH_TIMEOUT:-180}"

    local root
    root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
    cd "$root"

    # .env is gitignored, so neither the checkout nor the rebuild touches the
    # server's configuration.
    if [[ ! -f .env ]]; then
        log "ERROR: .env is missing in $PWD -- the container will not start."
        return 1
    fi

    # Second half of a deploy: the previous release's copy of this script has
    # just checked this release out and handed over (see below).
    if [[ -n "${DEPLOY_PREVIOUS:-}" ]]; then
        if ! git cat-file -e "${DEPLOY_PREVIOUS}^{commit}" 2>/dev/null; then
            log "ERROR: DEPLOY_PREVIOUS=$DEPLOY_PREVIOUS is not a commit here; refusing to guess a rollback target"
            return 1
        fi
        roll_out "$DEPLOY_PREVIOUS" "$(git rev-parse HEAD)" "$HEALTH_TIMEOUT" "$BRANCH"
        return
    fi

    local previous target
    previous="$(git rev-parse HEAD)"
    log "current commit: $previous on branch $(git rev-parse --abbrev-ref HEAD)"

    git fetch --prune origin "$BRANCH"
    target="$(git rev-parse "origin/$BRANCH")"

    if [[ "$previous" == "$target" ]]; then
        log "already at origin/$BRANCH; making sure the stack is up"
        compose up -d
        wait_healthy "$(health_url)" "$HEALTH_TIMEOUT" && {
            log "healthy, nothing to deploy"
            return 0
        }
        log "ERROR: stack is unhealthy at the current commit"
        compose logs --tail 50 app nginx
        return 1
    fi

    log "deploying $previous -> $target"
    # checkout -B, not reset --hard: reset moves whichever branch happens to be
    # checked out, leaving the server on a stale branch name that merely points
    # at the deployed commit.
    git checkout -B "$BRANCH" "$target"

    # Hand over to the release's own copy of this script.
    #
    # The copy running now was read from the checkout *before* the update, so
    # it is always one release behind the compose file it is about to apply.
    # That has taken the site down: a release that changed the health-check
    # address was judged by a script still polling the old one, declared
    # unhealthy while serving visitors, and rolled back — once into a working
    # site, once into a compose file the network could no longer satisfy.
    # Handing over means the build, the health check and the rollback are
    # always the new release's own. `exec` starts a fresh bash that reads the
    # new file from the top, so the mid-read rewrite main() guards against
    # cannot happen either.
    if grep -q 'DEPLOY_PREVIOUS' deploy/deploy.sh; then
        log "handing over to deploy/deploy.sh as of $target"
        DEPLOY_PREVIOUS="$previous" exec bash "$root/deploy/deploy.sh"
    fi

    # The release predates the handover — main was force-pushed back to an old
    # commit. Its script cannot take a second half, so finish with this one's.
    roll_out "$previous" "$target" "$HEALTH_TIMEOUT" "$BRANCH"
}

# Build and start `target`, and return to `previous` if it never answers.
roll_out() {
    local previous="$1" target="$2" timeout="$3" branch="$4"

    # `up -d --build` recreates a container whose configuration changed, which
    # matters because the photographs and PDFs reach the site through bind
    # mounts: a release that moves them needs the mounts repointed, not just a
    # new image.
    if compose up -d --build && wait_healthy "$(health_url)" "$timeout"; then
        log "deployed $target on branch $branch successfully"
        # Keep the disk from filling up with superseded build layers.
        docker image prune -f >/dev/null || true
        return 0
    fi

    log "ERROR: $target did not become healthy within ${timeout}s; rolling back"
    compose logs --tail 80 app nginx || true

    git reset --hard "$previous"
    if compose up -d --build && wait_healthy "$(health_url)" "$timeout"; then
        log "rolled back to $previous"
    else
        log "FATAL: rollback to $previous is also unhealthy -- manual intervention needed"
    fi
    return 1
}

log() { printf '==> %s\n' "$*"; }

compose() { docker compose "$@"; }

# Where to knock, asked of the running stack rather than remembered here.
#
# This script is read from the checkout as it stood *before* the update, so a
# hard-coded address belongs to the previous release while the compose file it
# applies belongs to the next one. That is not hypothetical: the release that
# removed the container's fixed bridge address was rolled back by a script
# still polling that address, after 180s of a perfectly healthy site serving
# visitors. Asking compose keeps the question pinned to what was just started.
health_url() {
    if [[ -n "${HEALTH_URL:-}" ]]; then
        printf '%s\n' "$HEALTH_URL"
        return
    fi
    local binding
    binding="$(compose port nginx 80 2>/dev/null | tr -d '\r')"
    printf 'http://%s/\n' "${binding:-127.0.0.1:8083}"
}

wait_healthy() {
    local url="$1" timeout="$2"
    local deadline=$((SECONDS + timeout))
    while ((SECONDS < deadline)); do
        if curl -fsS -m 5 "$url" >/dev/null 2>&1; then
            return 0
        fi
        sleep 3
    done
    return 1
}

main "$@"
