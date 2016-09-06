import * as plugins from './servezone.plugins'
import { SzNode } from './servezone.classes.sznode'
import { Smartsocket, SocketRole } from 'smartsocket'

/**
 * class SzManager manages a servezone cluster
 */
export class SzManager {
    port: number
    mongoConnection
    szNodesArray: SzNode[]
    smartsocket: Smartsocket

    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg: number = 4567) {
        this.smartsocket = new Smartsocket({
            port: portArg
        })
        let ciRole = new SocketRole({
            name: 'ci',
            passwordHash: 'somehash' // TODO
        })
        this.smartsocket.addSocketRoles([ciRole])
    };

    /**
     * starts a smartsocket server
     */
    startServer(): plugins.q.Promise<any> {
        let done = plugins.q.defer<any>()
        this.smartsocket.startServer()
        return done.promise
    };

    /**
     * connects to a database
     */
    connectDatabase() {
        let done = plugins.q.defer<any>()
        return done.promise
    };

    /**
     * terminate Servezone Manager
     */
    terminate() {
        this.smartsocket.closeServer()
    }
};
