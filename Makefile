# Development runs the Next.js client straight from `web/`; production runs it
# from the Docker image behind nginx. Both are driven from this file.
#
# Compose v2 is the default. On a host that still only has the old standalone
# binary, override it: `make up COMPOSE=docker-compose`.
COMPOSE ?= docker compose
WEB := web
LEGACY := client
# The catalog API lives in a sibling repository; see the README of ../genesis.
BACKEND := ../genesis

.DEFAULT_GOAL := help

help:  ## Show this help
	@grep -hE '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

# --- Development ------------------------------------------------------------

install:  ## Install the client's dependencies
	cd $(WEB) && npm ci

dev:  ## Run the Next.js dev server on http://localhost:3000
	cd $(WEB) && npm run dev

backend:  ## Start the catalog API from ../genesis (dev database + runserver)
	$(MAKE) -C $(BACKEND) up_db
	$(MAKE) -C $(BACKEND) dev

backend-db:  ## Start only the dev database from ../genesis
	$(MAKE) -C $(BACKEND) up_db

lint:  ## ESLint over the client
	cd $(WEB) && npm run lint

typecheck:  ## tsc --noEmit over the client
	cd $(WEB) && npm run typecheck

check: lint typecheck  ## Lint and typecheck

build:  ## Production build of the client, outside Docker
	cd $(WEB) && npm run build

start:  ## Serve the local production build on http://localhost:3000
	cd $(WEB) && npm run start

clean:  ## Drop local build artefacts
	rm -rf $(WEB)/.next

# --- Production (Docker) ----------------------------------------------------

up:  ## Build the images and start nginx + the client
	$(COMPOSE) up -d --build

down:  ## Stop and remove the containers
	$(COMPOSE) down

rebuild: down up  ## Full recreate — needed when the compose network changes

restart:  ## Restart the client without rebuilding
	$(COMPOSE) restart app

logs:  ## Follow the client's logs
	$(COMPOSE) logs -f app

logs-nginx:  ## Follow nginx's logs
	$(COMPOSE) logs -f nginx

ps:  ## Show container status
	$(COMPOSE) ps

shell:  ## Open a shell inside the running client container
	$(COMPOSE) exec app sh

config:  ## Render the resolved compose file
	$(COMPOSE) config

# --- Legacy Vite client -----------------------------------------------------
# Kept working until the cutover is confirmed; not deployed any more.

legacy-dev:  ## Run the old Vite dev server
	cd $(LEGACY) && npm run dev

legacy-build:  ## Build the old Vite client into client/dist
	cd $(LEGACY) && npm run build

.PHONY: help install dev backend backend-db lint typecheck check build start \
	clean up down rebuild restart logs logs-nginx ps shell config \
	legacy-dev legacy-build
