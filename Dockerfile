FROM node:18.16.0-alpine as base
RUN apk add git
RUN apk add bash
RUN apk update && apk add gnupg wget
WORKDIR /tmp
ADD ./src /tmp/src
ADD ./public /tmp/public
COPY ["package.json", "package-lock.json",  "/tmp/"]
RUN npm install && npm run build

FROM busybox:latest

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --chown=1000:1000 --from=base /tmp/build/ .

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]