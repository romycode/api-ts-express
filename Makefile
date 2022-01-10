CURRENT_DIR=$(shell pwd)

init: build deps migrate up

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

deps:
	docker compose run --no-deps --rm express-api pnpm i
	docker compose run --no-deps --rm express-api pnpx prisma generate

migrate:
	docker compose run --no-deps --rm express-api pnpm run prisma migrate dev

generate-migration:
	docker compose run --no-deps --rm express-api pnpx prisma migrate dev --create-only

test:
	docker compose run --no-deps --rm express-api pnpm run test

bash:
	docker compose run --no-deps --rm express-api /bin/bash