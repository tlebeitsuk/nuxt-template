FROM node:lts-alpine AS api

WORKDIR /api

COPY .output/server /api

EXPOSE 8080

ENTRYPOINT ["node", "index.mjs"]
