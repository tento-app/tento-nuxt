FROM timbru31/node-alpine-git

ENV NODE_ENV=production
ENV HOST 0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

EXPOSE 3000

RUN yarn install --production
RUN yarn run build

CMD ["yarn", "start"]