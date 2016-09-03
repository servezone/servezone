# servezone
easy and advanced production docker management.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/servezone)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/servezone/servezone)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/servezone/servezone)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://servezone.gitlab.io/servezone/docs)

## Status for master
[![build status](https://gitlab.com/servezone/servezone/badges/master/build.svg)](https://gitlab.com/servezone/servezone/commits/master)
[![coverage report](https://gitlab.com/servezone/servezone/badges/master/coverage.svg)](https://gitlab.com/servezone/servezone/commits/master)
[![Dependency Status](https://david-dm.org/servezone/servezone.svg)](https://david-dm.org/servezone/servezone)
[![bitHound Dependencies](https://www.bithound.io/github/servezone/servezone/badges/dependencies.svg)](https://www.bithound.io/github/servezone/servezone/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/servezone/servezone/badges/code.svg)](https://www.bithound.io/github/servezone/servezone)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)

## Usage
servezone has a ready to use [official docker image](https://hub.docker.com/r/hosttoday/ht-docker-coretraffic/).
It uses websockets for easy communication between nodes and features realtime notifications of events in your docker cluster.

### Terminology
* **ServeZone Cluster:** consists of a servezone manager and multiple servezone nodes 
* **ServeZone Manager:** A servezone manager manages a ServeZone cluster.
* **ServeZone Node:** A servezone node runs servezone services
* **ServeZone Service** ServezoneServices are docker containers that are scheduled using the ServeZone Manager Api
    * Services can be categorized in Masterservices and Subservices.
      Subservices can provide certain functionailty to Masterservices
### Create an servezone instance.
First off servezone will check for the `DOCKER=true` env variable.
If docker is set to true it will look for an config at /config.
So make sure to either copy a config file there or mount a directory with a config file in place.

For further information read the docs.

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)