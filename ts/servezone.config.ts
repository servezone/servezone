import * as plugins from './servezone.plugins'

export class IServezoneConfig {
  port: number
  authToken: string
  configOriginRepo: string
  constructor () {
    
  }
};

export let config = new IServezoneConfig()

