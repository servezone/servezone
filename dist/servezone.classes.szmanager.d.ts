import { Smartsocket } from 'smartsocket';
/**
 * class SzManager manages a servezone cluster
 */
export declare class SzManager {
    port: number;
    mongoConnection: any;
    smartsocket: Smartsocket;
    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg?: number);
    /**
     * starts a smartsocket server
     */
    startServer(): Promise<any>;
    /**
     * terminate Servezone Manager
     */
    terminate(): void;
}
