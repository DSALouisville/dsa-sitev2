#! /bin/bash

cd server
npm run build
mocha dist/test
cd ../nextjs
jest
