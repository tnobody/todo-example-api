FROM node:8-alpine

EXPOSE 8080

COPY . /app
WORKDIR /app
RUN npm i

CMD npm start