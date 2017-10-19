# FROM node:6-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 8081
# CMD npm start
#docker run -itd -p 8100:8100 -v `pwd`:/Service 

FROM node:8.6.0
RUN mkdir -p /Service
RUN npm i -g n
RUN npm i -g yarn
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

WORKDIR /Service
EXPOSE 8100
#CMD npm start