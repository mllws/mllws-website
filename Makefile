.PHONY: help install dev build start lint clean

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the development server
	npm run dev

build: ## Create a production build
	npm run build

start: ## Run the production build
	npm start

lint: ## Run ESLint
	npm run lint

clean: ## Remove build artifacts and dependencies
	rm -rf .next out node_modules
