FROM node:18.16.0-bullseye
COPY package.json /opt/server/package.json
COPY package-lock.json /opt/server/package-lock.json
WORKDIR /opt/server
RUN npm ci
USER node:node
COPY main.mjs /opt/server/main.mjs
CMD node main.mjs
