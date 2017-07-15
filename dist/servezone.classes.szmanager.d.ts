import * as plugins from './servezone.plugins';
import { Smartsocket } from 'smartsocket';
import { Objectmap } from 'lik';
import { IAppJSON } from 'smartapp';
import { SzApp } from './servezone.classes.szapp';
/**
 * class SzManager manages a servezone cluster
 */
export declare class SzManager {
    port: number;
    mongoConnection: any;
    smartsocket: Smartsocket;
    appStore: Objectmap<SzApp>;
    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg?: number);
    /**
     * checks if a specific app is part of the servezone cluster and if yes returns data about it
     */
    checkApp(appJsonArg: plugins.smartapp.IAppJSON, shipzoneData?: plugins.serveZoneInterfaces.IShipZoneData): Promise<SzApp>;
    /**
     * updates an app that is in the cluster
     */
    updateApp(appJsonArg: plugins.smartapp.IAppJSON, shipzoneData?: plugins.serveZoneInterfaces.IShipZoneData): Promise<void>;
    /**
     * adds a new app to the cluster
     */
    addApp(appJsonArg: plugins.smartapp.IAppJSON, shipzoneData?: plugins.serveZoneInterfaces.IShipZoneData): Promise<IAppJSON>;
    /**
     * starts a smartsocket server
     */
    startServer(): Promise<any>;
    /**
     * terminate Servezone Manager
     */
    terminate(): Promise<void>;
}
