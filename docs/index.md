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

This module is not meant for standalone use but rather as base for various parts of the servezone ecosystem. It houses all important classes so every high level component across the servezone stack has a mutual understanding of how things work

## General ideas

### Websockets
servezone uses websockets for easy communication between nodes and realtime notifications of events in your docker cluster.

### Reverse Proxy
Every node uses a reverse proxy to schedule traffic

### High Level components
There are various high level component:

* **cloudly** - Uses this package to spawn up a central management instance
* **coretraffic** - the traffic handler that runs once on every node in the cluster
* **corebackup** - the backup handler that runs once on every node in the cluster
* **corecdn** - the cdn handler that runs once onevery node. Enables distribution of public high availablilty content trhough every node in the cluster.
* **coredoc** the errordoc handler that serves traffic that can't be attributed to any specific container on the node


### Classes
* **SzCluster** - A servezone cluster is the highest object in the servezone world and directly maps to one docker swarm cluster.
* **SzManager** - A servezone manager manages a ServeZone cluster.
* **SzApp** - A servezone app is an application that is supposed to run in the ServeZone cluster and is managed by an ServeZone Manager
* **SzService** A ServeZone Service always maps to a docker container that is scheduled by the ServeZone Manager
    * Services can be categorized in Masterservices and Subservices.
      Subservices can provide certain functionailty to Masterservices
    * A SzApp always has one Masterservice
    * A SzApp can have multiple Subservices

### Docker Swarm
Under the hood we use Docker Swarm. Serve.Zone is merely a configuration candy layer that makes it easy to deploy and manage applications from within CI Jobs. In general we recommend GitLab for the CI side of things. 

### Create an servezone instance.
Take a look at cloudly on npm for how to start a servezone instance. Its easier than kubernetes. :)

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)

[![repo-footer](https://servezone.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
