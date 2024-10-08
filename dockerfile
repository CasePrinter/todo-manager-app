FROM node:18.15.0-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY . /app/

RUN npm run build

CMD ["npm", "run", "start"]