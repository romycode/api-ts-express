CURRENT_DIR=$(shell pwd)

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

migrate:
	docker-compose run --no-deps --rm expressts-api pnpm run typeorm migration:run

test:
	docker-compose run --no-deps --rm expressts-api pnpm run test

bash:
	docker-compose exec expressts-api /bin/ash