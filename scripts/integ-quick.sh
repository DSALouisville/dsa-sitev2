#! /bin/bash

export serverUrl="http://localhost:5000"
export mongoUrl="mongodb://localhost:27017/test"

mongod

cd ../nextjs
npm run build
npm run start &

cd ../server
npm run build
node dist/index &

cd ..
nightwatch integrations
