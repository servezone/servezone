import * as plugins from "./servezone.plugins";
import { SzNode } from "./servezone.classes.sznode";
import { Smartsocket } from "smartsocket";

/**
 * class SzManager manages a servezone cluster
 */
export class SzManager {
    port: number;
    mongoConnection;
    szNodesArray: SzNode[];
    smartsocket: Smartsocket;

    constructor(portArg: number = 4567) {
        this.smartsocket = new Smartsocket({
            port: portArg
        });
    };

    /**
     * starts a smartsocket server
     */
    startServer(): void {
        this.smartsocket.startServer();
    };

    /**
     * connects to a database
     */
    connectDatabase() {

    }
};
