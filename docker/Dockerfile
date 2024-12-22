FROM node:latest

WORKDIR /usr/app

COPY . .
COPY ../package.json .

RUN npm update
RUN npm upgrade

RUN npm install
RUN npm i express
RUN npm i consign
RUN npm i dotenv
RUN npm i cors
RUN npm i body-parser
RUN npm i pg


# Instalar o dockerize
RUN apt-get update && apt-get install -y wget
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

CMD ["npm", "run", "dev"]
