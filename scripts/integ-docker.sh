#! /bin/bash

export serverUrl="http://localhost:5000"
export mongoUrl="mongodb://localhost:27017/test"

mongod

cd ../nextjs
docker build -t dsa-sitev2-dev .
docker run -d -p 3000:3000 dsa-sitev2-dev

cd ../server
npm run build
docker build -t dsa-server-dev .
docker run -d -p 5000:5000 dsa-server-dev

cd ..
nightwatch integrations
