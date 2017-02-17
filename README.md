# servezone
easy yet advanced production docker management

## Availabililty
[![npm](https://servezone.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/servezone)
[![git](https://servezone.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/servezone/servezone)
[![git](https://servezone.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/servezone/servezone)
[![docs](https://servezone.gitlab.io/assets/repo-button-docs.svg)](https://servezone.gitlab.io/servezone/)

## Status for master
[![build status](https://GitLab.com/servezone/servezone/badges/master/build.svg)](https://GitLab.com/servezone/servezone/commits/master)
[![coverage report](https://GitLab.com/servezone/servezone/badges/master/coverage.svg)](https://GitLab.com/servezone/servezone/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/servezone.svg)](https://www.npmjs.com/package/servezone)
[![Dependency Status](https://david-dm.org/servezone/servezone.svg)](https://david-dm.org/servezone/servezone)
[![bitHound Dependencies](https://www.bithound.io/github/servezone/servezone/badges/dependencies.svg)](https://www.bithound.io/github/servezone/servezone/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/servezone/servezone/badges/code.svg)](https://www.bithound.io/github/servezone/servezone)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

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

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)

[![repo-footer](https://servezone.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
