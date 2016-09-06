/// <reference types="q" />
import * as plugins from './servezone.plugins';
import { SzNode } from './servezone.classes.sznode';
import { Smartsocket } from 'smartsocket';
/**
 * class SzManager manages a servezone cluster
 */
export declare class SzManager {
    port: number;
    mongoConnection: any;
    szNodesArray: SzNode[];
    smartsocket: Smartsocket;
    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg?: number);
    /**
     * starts a smartsocket server
     */
    startServer(): plugins.q.Promise<any>;
    /**
     * connects to a database
     */
    connectDatabase(): plugins.q.Promise<any>;
    /**
     * terminate Servezone Manager
     */
    terminate(): void;
}
