/**
 * SzManager - Description
 */
import * as plugins from './servezone.plugins';
import { Smartsocket } from 'smartsocket';
import { Objectmap } from 'lik';
import { IAppJSON } from 'smartapp';
import { SzApp } from './servezone.classes.szapp';
/**
 * class SzManager
 * provides the API against which to schedule apps
 */
export declare class SzManager {
    port: number;
    smartsocket: Smartsocket;
    appStore: Objectmap<SzApp>;
    cflare: plugins.cflare.CflareAccount;
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
    close(): Promise<void>;
}
