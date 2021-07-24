CURRENT_DIR=$(shell pwd)

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	docker-compose run --no-deps --rm api pnpm run test
