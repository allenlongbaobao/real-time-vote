FROM node:8

EXPOSE 8888

WORKDIR /dream-client

COPY ./package.json .

RUN npm config set registry https://registry.npm.taobao.org/ && \
    npm install && \
    npm install -g typeorm

COPY . .

RUN npm run build

ENV NODE_ENV=production

# 这里不用切换到 dist 目录，默认还是停留在根目录，方便 docker exec 执行一些额外的命令
CMD ["node", "dist/index.js"]