FROM node:latest

WORKDIR /usr/app

COPY . .
COPY ../package.json .

RUN npm update
RUN npm install

# Instalar o dockerize
# RUN apt-get update && apt-get install -y wget
# RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
#     && rm dockerize-linux-amd64-v0.6.1.tar.gz

CMD ["npm", "run", "dev"]
