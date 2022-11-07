FROM node:16-alpine
WORKDIR /var/www/html/
#WORKDIR /var/www/html/docker/c1
#COPY package*.json ./-
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY --chown=root:root . .
EXPOSE 7777
CMD [ "node", "server.js" ]