CURRENT_DIR=$(shell pwd)

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

deps:
	docker-compose run --no-deps --rm express-api pnpm i

migrate:
	docker-compose run --no-deps --rm express-api pnpm run typeorm migration:run

test:
	docker-compose run --no-deps --rm express-api pnpm run test

bash:
	docker-compose run --no-deps --rm express-api /bin/bash