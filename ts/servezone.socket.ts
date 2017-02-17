import * as plugins from './servezone.plugins'

// interfaces
import { config } from './servezone.config'

let mainSmartsocket: plugins.smartsocket.Smartsocket = new plugins.smartsocket.Smartsocket({
    port: config.port
})

let roleCi = new plugins.smartsocket.SocketRole({
    name: 'ci',
    passwordHash:  'someHash' // TODO
})

let roleSzNode = new plugins.smartsocket.SocketRole({
    name: 'szNode',
    passwordHash: 'someHash' // TODO
})

mainSmartsocket.addSocketRoles([
    roleCi,
    roleSzNode
])
