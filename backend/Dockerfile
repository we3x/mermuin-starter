FROM node:latest

# set working directory
RUN mkdir /usr/src/api
WORKDIR /usr/src/api

# install and cache app dependencies
ADD package.json /usr/src/api/package.json
RUN npm install

# add `/usr/src/api/node_modules/.bin` to $PATH
ENV PATH /usr/src/api/node_modules/.bin:$PATH

# add app
COPY . /usr/src/api