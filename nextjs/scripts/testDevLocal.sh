#! /bin/bash

cp -f jest_babel .babelrc
jest tests
mv -f .babelrc jest_babel
