FROM node:18.16.0-bullseye
USER node:node
WORKDIR /opt/server
COPY node_modules /opt/server/node_modules
COPY main.mjs /opt/server/main.mjs
CMD node main.mjs
