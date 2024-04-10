FROM node:16-alpine

WORKDIR /app

RUN apk upgrade

ENV PORT 8080

EXPOSE 8080

COPY "package.json" . 

RUN yarn

COPY . .

CMD ["yarn", "start"]

