import * as plugins from './servezone.plugins'
import {Objectmap} from 'lik'
export let allSzNodes = new Objectmap<SzNode>()

export interface ISzNodeConstructorOptions {
    ip: number
    storage: number
    hostName?: number
}


/**
 * class SzNode represents a node in a servezone cluster
 */
export class SzNode extends Instance<SzNodeDocument, SzNode> implements SzNodeDocument {
    name: string
    ip: number
    storageAvailable: number
    storageUsed: number
};
