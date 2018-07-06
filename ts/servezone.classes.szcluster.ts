/**
 * SzManager - Description
 */

import * as plugins from './servezone.plugins';

import { SzManager } from './servezone.classes.szmanager';

/**
 * class SzCluster
 * takes care of communicating with the coreflow Container in the dockerSwarm cluster
 */
export class SzCluster {
  szManager: SzManager;

  constructor() {
    this.szManager = new SzManager();
  }

  init(optionsArg) {}
}
