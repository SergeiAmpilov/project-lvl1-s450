install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

build:
	npx babel src --out-dir dist
