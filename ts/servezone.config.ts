import * as plugins from './servezone.plugins'

export class IServezoneConfig {
  port: number
  authToken: string
  configOriginRepo: string
  constructor () {
    plugins.beautylog.figletSync('ServeZone')
  }
};

export let servezoneConfig = new IServezoneConfig()
