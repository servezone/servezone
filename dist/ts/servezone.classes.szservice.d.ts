import { SzNode } from "./servezone.classes.sznode";
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
