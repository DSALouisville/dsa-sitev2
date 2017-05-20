#! /bin/bash

export mongoUrl='mongodb://localhost:27017/test';
export serverUrl='http://localhost:5000';
cd server
npm run build
mocha dist/test
cd ../nextjs
./testDevLocal.sh
