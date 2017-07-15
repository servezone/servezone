import * as plugins from './servezone.plugins'

import { IAppJSON } from 'smartapp'

export type TSzAppStatus = 'created' | 'running' | 'updating' | 'terminating' | 'paused' | 'maintenance'


export class SzApp {
  appJson: IAppJSON
  status: TSzAppStatus
  deployHistory: string[]
  constructor (appJsonArg: IAppJSON) {
    this.appJson = appJsonArg
  }

  /**
   * deploys the app to the servezone cluster
   */
  deploy () {

  }

  /**
   * syncs the state of the app with the servezone cluster
   */
  syncState () {

  }
}
