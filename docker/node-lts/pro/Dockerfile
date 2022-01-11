FROM node:lts

WORKDIR /opt/app

ADD package.json    .
ADD pnpm-lock.yaml  .

COPY prisma         prisma
COPY src            src
COPY .env           .env
COPY tsconfig.json  tsconfig.json

RUN npm i -g npm pnpm > /dev/null 2>&1 \
    && pnpm i \
    && pnpm prisma generate \
    && pnpm tsc \
    && pnpm tsc-alias \
    && pnpm i --prod

EXPOSE 8080
CMD [ "node", "dist/src/index.js" ]