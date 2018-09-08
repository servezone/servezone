/**
 * SzApp - Description
 *
 */

import * as plugins from './servezone.plugins';

// interfaces
import { IAppJSON } from '@servezone/appjson';

// classes
import { SzDeployment } from './servezone.classes.szdeployment';

/**
 * the main class describing an app
 */
export class SzApp {
  /** 
   * creates an app from an app.json like structure
   */
  public static async fromAppJson () {}
  public static async fromDatabase () {}

  appJson: IAppJSON;
  deployment: SzDeployment;

  constructor(appJsonArg: IAppJSON) {
    this.appJson = appJsonArg;
  }

  /**
   * deploys the app to the servezone cluster
   */
  async deploy() {
    await this.syncState();
    if (!this.deployment) {
      this.deployment = new SzDeployment(this);
    }
    await this.deployment.deployToCluster();
    await this.deployment.syncCloudflare();
  }

  /**
   * syncs the state of the app with the servezone cluster
   */
  async syncState() {}
}
