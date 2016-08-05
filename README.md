# servezone
easy and advanced production docker management.

## Status

## Usage
servezone has a ready to use [official docker image](https://hub.docker.com/r/hosttoday/ht-docker-coretraffic/).
It uses websockets for easy communication between nodes and features realtime notifications of events in your docker cluster.

### Terminology
* **ServeZone Cluster:** consists of a servezone manager and multiple servezone nodes 
* **ServeZone Manager:** A servezone manager manages a ServeZone cluster.
* **ServeZone Node:** A servezone node runs servezone services
* **ServeZone Service** ServezoneServices are docker containers that are scheduled using the ServeZone Manager Api

### Create an servezone instance.
First off servezone will check for the `DOCKER=true` env variable.
If docker is set to true it will look for an config at /config.
So make sure to either copy a config file there or mount a directory with a config file in place.