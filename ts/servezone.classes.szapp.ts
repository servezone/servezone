import * as plugins from './servezone.plugins'

import { IAppJSON } from 'smartapp'

export class SzApp {
  appJson: IAppJSON

  constructor (appJsonArg: IAppJSON) {
    this.appJson = appJsonArg
  }
}
