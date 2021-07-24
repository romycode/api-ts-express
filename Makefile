CURRENT_DIR=$(shell pwd)

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

dev:
	docker-compose run --no-deps --rm api pnpm run test
