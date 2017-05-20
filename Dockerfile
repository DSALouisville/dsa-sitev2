FROM node:latest

ENV serverUrl="http://localhost:5000"
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
