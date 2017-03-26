// -------
// imports
// -------

import * as plugins from './servezone.plugins'
import { servezoneDb } from './servezone.data'
import { servezoneConfig } from './servezone.config'

// main classes
import './servezone.classes.szapp'
import './servezone.classes.szmanager'
import './servezone.classes.szservice'

// -------------
// setup the CLI
// -------------

let servezoneCli = new plugins.smartcli.Smartcli()

servezoneCli.standardTask().then(argv => {
  
})
