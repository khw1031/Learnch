FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 7000
CMD ["yarn", "start"]