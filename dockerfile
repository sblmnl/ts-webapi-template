FROM node:22-alpine3.19 AS builder
WORKDIR /home/node
COPY --chown=node:node . .
RUN npm run build

FROM node:22-alpine3.19
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/dist/ .
COPY --from=builder --chown=node:node /home/node/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/package.json ./package.json

RUN npm prune --omit=dev
EXPOSE 8080
CMD ["sh","-c","node ."]
