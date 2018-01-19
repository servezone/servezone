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
[![Known Vulnerabilities](https://snyk.io/test/npm/servezone/badge.svg)](https://snyk.io/test/npm/servezone)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

This module is not meant for standalone use but rather as base for various parts of the servezone ecosystem. It houses all important classes so every high level component across the servezone stack has a mutual understanding of how things work.

For more information visit [https://serve.zone](https://serve.zone)

## General ideas

### Websockets

servezone uses websockets for easy communication between nodes and realtime notifications of events in your docker cluster.

### Reverse Proxy

Every node uses a reverse proxy to manage traffic distribution to services.

### High Level components

There are various high level npm modules that each run in their own docker container:

* **servezone** - _npm module_ - this package is the central core of servezone and contains major parts of the scheduling logic
* **cloudly** - _npm tool_ - this package contains the scheduling API for the outside world and should run outside of any cluster. It can even create new clusters from scratch by using the Digital Ocean API
* **coreflow** - _docker container_ - runs in docker swarm and enables secure connection to the docker remote api
* **coretraffic** - _docker container_ the traffic handler that runs once on every node in the cluster
* **corebackup** - _docker container_ the backup handler that runs once on every node in the cluster
* **corecdn** - _docker container_ the cdn handler that runs once onevery node. Enables distribution of public high availablilty content trhough every node in the cluster.
* **coredoc** _docker container_ the errordoc handler that serves traffic that can't be attributed to any specific container on the node

### Classes

* **SzCluster** - A servezone cluster is the highest object in the servezone world and directly maps to one docker swarm cluster.
* **SzManager** - A servezone manager manages a ServeZone cluster.
* **SzApp** - A servezone app is an application that is supposed to run in the ServeZone cluster and is managed by an ServeZone Manager
* **SzService** A ServeZone Service always maps to a docker container that is scheduled by the ServeZone Manager
  * Services can be categorized in Masterservices and Subservices.
    Subservices can provide certain functionailty to Masterservices
  * A Servezone App always has one Masterservice
  * A Servezone App can have multiple Subservices
  * All Servezone Services that belong to a Servezone App are connected through a docker overlay network.
* **SzDeployment** - A servezone deployment keeps track of when an app was last deployed and exposes methods to repeat specific or all deployment steps.
* **SzNode** - a single node withing a SzCluster

### Docker Swarm

Under the hood we use Docker Swarm. Serve.Zone is merely a configuration candy layer that makes it easy to deploy and manage applications from within CI Jobs. In general we recommend GitLab for the CI side of things.

## shipzone and servezone - made for each other

If you wonder how to push an app from ci to a servezone cluster take a look at shipzone on npm.

shipzone is built with one target in mind: Pushing apps to servezone in a reliable manner.

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://servezone.gitlab.io/assets/repo-footer.svg)](https://serve.zone)
