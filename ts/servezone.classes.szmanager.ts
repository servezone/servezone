import * as plugins from "./servezone.plugins";
import { SzNode } from "./servezone.classes.sznode";

export class SzManager {
    port: number;
    mongoConnection; // the database connection
    szNodesArray: SzNode[]
    constructor() {
        
    };
};
