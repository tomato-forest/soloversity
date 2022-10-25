FROM node:lts-alpine

ENV ROOT="/web"
ENV LANG=C.UTF-8

WORKDIR ${ROOT}

RUN apk update && \
    apk --no-cache add openssl-dev
