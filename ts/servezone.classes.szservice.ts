import * as plugins from "./servezone.plugins";

// import classes
import { SzNode } from "./servezone.classes.sznode";

/**
 * class SzService describes a service 
 */
export class SzService {
    imagePath:string;
    versionAvailable:string;
    versionDeployed:string;
    nodesUsed:SzNode[];
    constructor(){

    }
};
