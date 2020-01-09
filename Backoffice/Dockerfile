FROM alpine:latest

RUN apk update && apk upgrade

RUN apk add nodejs npm

WORKDIR /usr/local/nginx/html

COPY ./package.json .

RUN npm install

COPY . .

CMD ["npm","run","start"]

EXPOSE 3000