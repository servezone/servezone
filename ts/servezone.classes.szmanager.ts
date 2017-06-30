import * as plugins from './servezone.plugins'
import { Smartsocket, SocketRole } from 'smartsocket'

/**
 * class SzManager manages a servezone cluster
 */
export class SzManager {
  port: number
  mongoConnection
  smartsocket: Smartsocket

  /**
   * constructor, sets up smartsocket
   */
  constructor (portArg: number = 4567) {
    this.smartsocket = new Smartsocket({
      port: portArg
    })
    let ciRole = new SocketRole({
      name: 'ci',
      passwordHash: 'somehash' // TODO
    })
    this.smartsocket.addSocketRoles([ ciRole ])
  }

  /**
   * starts a smartsocket server
   */
  startServer (): Promise<any> {
    let done = plugins.q.defer<any>()
    this.smartsocket.startServer()
    return done.promise
  }

  /**
   * terminate Servezone Manager
   */
  terminate () {
    this.smartsocket.closeServer()
  }
}
