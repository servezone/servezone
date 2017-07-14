import { Smartsocket } from 'smartsocket';
/**
 * class SzManager manages a servezone cluster
 */
export declare class SzManager {
    port: number;
    mongoConnection: any;
    smartsocket: Smartsocket;
    appStore: any;
    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg?: number);
    /**
     * checks if a specific app is part of the servezone cluster and if yes returns data about it
     */
    checkApp(): Promise<void>;
    /**
     * updates an app that is in the cluster
     */
    updateApp(): Promise<void>;
    /**
     * adds a new app to the cluster
     */
    addApp(): Promise<void>;
    /**
     * starts a smartsocket server
     */
    startServer(): Promise<any>;
    /**
     * terminate Servezone Manager
     */
    terminate(): void;
}
