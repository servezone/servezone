import { Objectmap } from 'lik';
import { SzNode } from './servezone.classes.sznode';
export declare let allSzServices: Objectmap<SzService>;
/**
 * class SzService describes a service
 */
export declare class SzService {
    imagePath: string;
    versionAvailable: string;
    versionDeployed: string;
    nodesUsed: SzNode[];
    constructor();
}
/**
 * class SzSubService extends SzService. A Subservice belongs to a Masterservice.
 */
export declare class SzSubService extends SzService {
    constructor();
}
