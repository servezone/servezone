import * as plugins from './servezone.plugins'
import {SocketConnection} from 'smartsocket'
import {Objectmap} from 'lik'
import {Core, Model, Instance, Collection, Index, Property, ObjectID} from 'iridium'
export let allSzNodes = new Objectmap<SzNode>()

export interface ISzNodeConstructorOptions {
    ip: number
    socketConnection: SocketConnection
    storage: number
    hostName?: number
}


export interface SzNodeDocument {

}

/**
 * class SzNode represents a node in a servezone cluster
 */
@Index({ name: 1 })
@Collection('houses')
export class SzNode extends Instance<SzNodeDocument, SzNode> implements SzNodeDocument {
    @ObjectID _id: string;
    @Property(/^.+$/)
    name: string
    ip: number
    socketConnection: SocketConnection
    storageAvailable: number
    storageUsed: number

};
