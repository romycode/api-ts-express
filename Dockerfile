FROM node:lts-alpine

WORKDIR /opt/app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g npm pnpm \
    && pnpm i

EXPOSE 8080
CMD [ "npm", "run", "dev" ]