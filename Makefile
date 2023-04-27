REPO ?= bndw/satscalc
TAG_LATEST=$(REPO):latest

all: dev

.PHONY: build
build:
	docker build -t $(TAG_LATEST) .

.PHONY: dev
dev:
	yarn dev

.PHONY: run
run:
	docker run --rm -p 3000:3000 $(TAG_LATEST)
