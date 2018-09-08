/**
 * Servezone
 * the main servezone
 */

import * as plugins from './servezone.plugins';
import { ServeZone } from './servezone.classes.servezone';

/**
 * class SzCluster
 * takes care of communicating with the coreflow Container in the dockerSwarm cluster
 */
export class SzCluster {
  /**
   * this inits any clusters stored in the database
   */
  initClustersFromDatabase() {

  }

  szManager: ServeZone;

  constructor() {
    
  }

  init(optionsArg) {}
}
