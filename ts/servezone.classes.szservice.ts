/**
 * SzService - Description
 */

import * as plugins from './servezone.plugins';
import { Objectmap } from 'lik';

export let allSzServices = new Objectmap<SzService>();

/**
 * class SzService describes a service
 */
export class SzService {
  /**
   * the docker image registry path to be used for the service
   */
  imagePath: string;

  /**
   * the latest available version
   */
  versionAvailable: string;

  /**
   * the version that is deployed
   */
  versionDeployed: string;

  constructor() {}
}

/**
 * class SzSubService extends SzService. A Subservice belongs to a Masterservice.
 */
export class SzSubService extends SzService {
  constructor() {
    super();
  }
}
