#! /bin/bash

mongod &
export mongoUrl="mongodb://localhost:27017/test"
cd ../server
npm test
