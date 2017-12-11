import * as plugins from './servezone.plugins'

// interfaces
import { IAppJSON } from 'smartapp'

// classes
import { SzDeployment } from './servezone.classes.szdeployment'

export class SzApp {
  appJson: IAppJSON
  deployment: SzDeployment

  constructor (appJsonArg: IAppJSON) {
    this.appJson = appJsonArg
  }

  /**
   * deploys the app to the servezone cluster
   */
  async deploy () {
    await this.syncState()
    if (!this.deployment) {
      this.deployment = new SzDeployment()
    }
    await this.deployment.deployToCluster()
    await this.deployment.syncCloudflare()
  }

  /**
   * syncs the state of the app with the servezone cluster
   */
  async syncState () {

  }
}
