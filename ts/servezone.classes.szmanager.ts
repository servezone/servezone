import * as plugins from './servezone.plugins'
import { Smartsocket, SocketRole } from 'smartsocket'

/**
 * class SzManager manages a servezone cluster
 */
export class SzManager {
  port: number
  mongoConnection
  smartsocket: Smartsocket
  appStore

  /**
   * constructor, sets up smartsocket
   */
  constructor(portArg: number = 4567) {
    this.smartsocket = new Smartsocket({
      port: portArg
    })

    // SOCKET ROLES
    // the role of the ci
    let roleCi = new SocketRole({
      name: 'ci',
      passwordHash: 'somehash' // TODO
    })

    // the role of the swarm cluster
    let roleSwarmCluster = new plugins.smartsocket.SocketRole({
      name: 'szNode',
      passwordHash: 'someHash' // TODO: provide a valid hash
    })

    // SOCKET FUNCTIONS
    // 
    let socketAddApp = new plugins.smartsocket.SocketFunction({
      allowedRoles: [ roleCi ],
      funcDef: async (dataArg: plugins.serveZoneInterfaces.ISocketAddApp) => {
        this.addApp()
      },
      funcName: 'addApp'
    })

    let socketUpdateApp = new plugins.smartsocket.SocketFunction({
      allowedRoles: [ roleCi ],
      funcDef: async () => {
        this.updateApp()
      },
      funcName: 'updateApp'
    })

    let socketCheckApp = new plugins.smartsocket.SocketFunction({
      allowedRoles: [ roleCi ],
      funcDef: async () => {
        this.checkApp()
      },
      funcName: 'updateApp'
    })

    this.smartsocket.addSocketRoles([ roleCi, roleSwarmCluster ])
  }

  /**
   * checks if a specific app is part of the servezone cluster and if yes returns data about it
   */
  async checkApp () {

  }

  /**
   * updates an app that is in the cluster
   */
  async updateApp () {

  }

  /**
   * adds a new app to the cluster
   */
  async addApp () {

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
