export mongoUrl="mongodb://localhost:27017/test"
export serverUrl="http://localhost:3000/"

cd server
npm run build
docker build -t dsa-server-dev .
docker run -d -p 5000:5000 -e mongoUrl="mongodb://localhost:27017/test" dsa-server-dev

cd ..
mongod &
cd nextjs
docker build --build-arg mongoUrl="mongodb://localhost:27017" -t dsa-sitev2-dev .
docker run -d -p 3000:3000 -e serverUrl="http://localhost:5000" dsa-sitev2-dev
