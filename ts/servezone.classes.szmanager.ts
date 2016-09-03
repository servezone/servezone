import * as plugins from "./servezone.plugins";
import { SzNode } from "./servezone.classes.sznode";

/**
 * class SzManager manages a servezone cluster
 */
export class SzManager {
    port: number;
    mongoConnection;
    szNodesArray: SzNode[]
    constructor() {
        
    };
};
