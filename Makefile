build:
	make clean
	tsc -p .
	cp -r ./src/static ./dist/src/
	cp -r ./src/templates ./dist/src/
	# cp -r ./src/libs/*.js ./dist/src/libs/
clean:
	rm -rf ./dist

run_local:
	make build
	pm2 start pm2.json --env production