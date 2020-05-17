FROM node:10.13-alpine
WORKDIR /app
COPY . /app

RUN yarn && yarn config set loglevel error && yarn config set unsafe-perm true && yarn build

CMD ["node", "server"]