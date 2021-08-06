FROM node:14 as builder
COPY ["src/react/url-shrinker/package.json", "src/react/url-shrinker/package-lock.json", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
COPY ["src/react/url-shrinker", "/usr/src/"]
RUN npm run build

FROM node:14
COPY ["package.json", "package-lock.json", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
COPY [".", "/usr/src/"]
COPY --from=builder /usr/src/build /usr/src/src/public
EXPOSE 5000
CMD ["node", "src/node/index.js"]
