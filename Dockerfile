FROM ubuntu:18.04

EXPOSE 3000

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install -y nodejs
RUN npm install -g corepack

COPY . .

RUN yarn global add serve
RUN yarn build

CMD ["serve", "-s", "-l", "3000", "build"]