FROM node:latest

WORKDIR /api

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ["node", "index.js"]