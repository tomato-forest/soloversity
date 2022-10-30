FROM ruby:3.1.2-alpine

ENV ROOT="/api"
ENV LANG=C.UTF-8

WORKDIR ${ROOT}

RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
        gcc \
        g++ \
        libc-dev \
        libxml2-dev \
        linux-headers \
        make \
        postgresql-dev \
        tzdata \
        git \
        imagemagick && \
    apk add --virtual build-packs --no-cache \
        build-base \
        curl-dev && \
    apk del build-packs

RUN apk add --no-cache gcompat
#nokogiriで詰まったので入れました。

COPY api/Gemfile ${ROOT}
COPY api/Gemfile.lock ${ROOT}

RUN bundle install
