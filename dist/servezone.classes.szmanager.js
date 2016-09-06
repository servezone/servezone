"use strict";
const plugins = require('./servezone.plugins');
const smartsocket_1 = require('smartsocket');
/**
 * class SzManager manages a servezone cluster
 */
class SzManager {
    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg = 4567) {
        this.smartsocket = new smartsocket_1.Smartsocket({
            port: portArg
        });
        let ciRole = new smartsocket_1.SocketRole({
            name: 'ci',
            passwordHash: 'somehash' // TODO
        });
        this.smartsocket.addSocketRoles([ciRole]);
    }
    ;
    /**
     * starts a smartsocket server
     */
    startServer() {
        let done = plugins.q.defer();
        this.smartsocket.startServer();
        return done.promise;
    }
    ;
    /**
     * connects to a database
     */
    connectDatabase() {
        let done = plugins.q.defer();
        return done.promise;
    }
    ;
    /**
     * terminate Servezone Manager
     */
    terminate() {
        this.smartsocket.closeServer();
    }
}
exports.SzManager = SzManager;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxxQkFDekIsQ0FBQyxDQUQ2QztBQUU5Qyw4QkFBd0MsYUFLeEMsQ0FBQyxDQUxvRDtBQUVyRDs7R0FFRztBQUNIO0lBTUk7O09BRUc7SUFDSCxZQUFZLE9BQU8sR0FBVyxJQUFJO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDO1lBQy9CLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQTtRQUNGLElBQUksTUFBTSxHQUFHLElBQUksd0JBQVUsQ0FBQztZQUN4QixJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxVQUFVLENBQUMsT0FBTztTQUNuQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQzs7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDUCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBTyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQzs7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDWCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBTyxDQUFBO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7O0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQTNDWSxpQkFBUyxZQTJDckIsQ0FBQTtBQUFBLENBQUMifQ==