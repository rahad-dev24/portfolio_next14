
FROM node:22-alpine3.18 as base

WORKDIR /nextapp

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev
