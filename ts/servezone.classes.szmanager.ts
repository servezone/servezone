/**
 * SzManager - Description
 */

import * as plugins from './servezone.plugins';
import { Smartsocket, SocketRole } from 'smartsocket';
import { Objectmap } from 'lik';
import { IAppJSON } from 'smartapp';

// classes
import { SzApp } from './servezone.classes.szapp';
import { SzService } from './servezone.classes.szservice';

/**
 * class SzManager
 * provides the API against which to schedule apps
 */
export class SzManager {
  port: number;
  smartsocket: Smartsocket;
  appStore = new plugins.lik.Objectmap<SzApp>();

  // Third party controlled services
  cflare: plugins.cflare.CflareAccount;

  /**
   * constructor, sets up smartsocket
   */
  constructor(portArg: number = 4567) {
    this.smartsocket = new Smartsocket({
      port: portArg
    });

    // SOCKET ROLES
    // the role of the ci
    let roleCi = new SocketRole({
      name: 'ci',
      passwordHash: 'somehash' // TODO
    });

    // the role of the swarm cluster
    let roleSwarmCluster = new plugins.smartsocket.SocketRole({
      name: 'szNode',
      passwordHash: 'someHash' // TODO: provide a valid hash
    });

    // SOCKET FUNCTIONS
    // adds an app to the socket
    let socketAddApp = new plugins.smartsocket.SocketFunction({
      allowedRoles: [roleCi],
      funcDef: async (dataArg: plugins.serveZoneInterfaces.ISocketAddApp) => {
        return await this.addApp(dataArg.appJSON);
      },
      funcName: 'addApp'
    });

    let socketUpdateApp = new plugins.smartsocket.SocketFunction({
      allowedRoles: [roleCi],
      funcDef: async (dataArg: plugins.serveZoneInterfaces.ISocketUpdateApp) => {
        return await this.updateApp(dataArg.appJSON);
      },
      funcName: 'updateApp'
    });

    let socketCheckApp = new plugins.smartsocket.SocketFunction({
      allowedRoles: [roleCi],
      funcDef: async (dataArg: plugins.serveZoneInterfaces.ISocketCheckApp) => {
        return await this.checkApp(dataArg.appJSON);
      },
      funcName: 'updateApp'
    });

    this.smartsocket.addSocketRoles([roleCi, roleSwarmCluster]);
  }

  /**
   * checks if a specific app is part of the servezone cluster and if yes returns data about it
   */
  async checkApp(
    appJsonArg: plugins.smartapp.IAppJSON,
    shipzoneData?: plugins.serveZoneInterfaces.IShipZoneData
  ) {
    let checkedApp = this.appStore.find(szAppArg => {
      return appJsonArg.name === szAppArg.appJson.name;
    });
    return checkedApp;
  }

  /**
   * updates an app that is in the cluster
   */
  async updateApp(
    appJsonArg: plugins.smartapp.IAppJSON,
    shipzoneData?: plugins.serveZoneInterfaces.IShipZoneData
  ) {
    let describedApp: SzApp = await this.checkApp(appJsonArg);
    if (describedApp) {
    }
  }

  /**
   * adds a new app to the cluster
   */
  async addApp(
    appJsonArg: plugins.smartapp.IAppJSON,
    shipzoneData?: plugins.serveZoneInterfaces.IShipZoneData
  ) {
    // make sure app does not exist yet
    let describedApp: SzApp = await this.checkApp(appJsonArg);
    if (!describedApp) {
      let newSzApp = new SzApp(appJsonArg);
      this.appStore.add(newSzApp);
      newSzApp.deploy();
      return appJsonArg;
    } else {
      return null;
    }
  }

  /**
   * starts a smartsocket server
   */
  async startServer(): Promise<any> {
    this.smartsocket.startServer();
    await plugins.smartdelay.delayFor(1000); // hack, but no better solution for now.
  }

  /**
   * terminate Servezone Manager
   */
  async close() {
    this.smartsocket.closeServer();
  }
}
