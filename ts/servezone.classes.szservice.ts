import * as plugins from './servezone.plugins'
import {Objectmap} from 'lik'

// import classes
import { SzNode } from './servezone.classes.sznode'

export let allSzServices = new Objectmap<SzService>()

/**
 * class SzService describes a service 
 */
export class SzService {
    imagePath: string
    versionAvailable: string
    versionDeployed: string
    nodesUsed: SzNode[]
    constructor() {

    }
};

/**
 * class SzSubService extends SzService. A Subservice belongs to a Masterservice.
 */
export class SzSubService extends SzService {
    constructor() {
        super()
    }
}
