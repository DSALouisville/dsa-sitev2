FROM node:boron

ENV mongoUrl="mongodb://mongo:27017/test"
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./dist /usr/src/app

EXPOSE 5000
CMD [ "node", "index" ]
