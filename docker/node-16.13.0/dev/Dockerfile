FROM node:lts

WORKDIR /opt/app

ADD package.json .
ADD pnpm-lock.yaml .

RUN npm i -g npm pnpm > /dev/null 2>&1

EXPOSE 8080
CMD [ "npm", "run", "dev" ]