import * as plugins from "./servezone.plugins";
import {SocketConnection} from "smartsocket"
import {Objectmap} from "lik";

export let allSzNodes = new Objectmap<SzNode>();

export interface ISzNodeConstructorOptions {
    ip:number;
    socketConnection:SocketConnection;
    storage:number;
    hostName?:number;
}

/**
 * class SzNode represents a node in a servezone cluster
 */
export class SzNode {
    ip:number;
    socketConnection:SocketConnection;
    storageAvailable:number;
    storageUsed:number;
    constructor(optionsArg:ISzNodeConstructorOptions){

    };
};


