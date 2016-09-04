import { SzNode } from "./servezone.classes.sznode";
/**
 * class SzManager manages a servezone cluster
 */
export declare class SzManager {
    port: number;
    mongoConnection: any;
    szNodesArray: SzNode[];
    constructor();
}
