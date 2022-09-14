FROM node:16.3.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]