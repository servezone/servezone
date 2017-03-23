// -------
// imports
// -------

import * as plugins from './servezone.plugins'
import { servezoneDb } from './servezone.data'
import { servezoneConfig } from './servezone.config'

// -------------
// setup the CLI
// -------------

let servezoneCli = new plugins.smartcli.Smartcli()

servezoneCli.standardTask().then(argv => {
  
})
