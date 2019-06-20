FROM node:latest

# set working directory
RUN mkdir /usr/src/frontend
WORKDIR /usr/src/frontend

# install and cache app dependencies
ADD package.json /usr/src/frontend/package.json
RUN npm install

# add `/usr/src/frontend/node_modules/.bin` to $PATH
ENV PATH /usr/src/frontend/node_modules/.bin:$PATH

# add app
COPY . /usr/src/frontend