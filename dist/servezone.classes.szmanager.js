"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./servezone.plugins");
const smartsocket_1 = require("smartsocket");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQThDO0FBQzlDLDZDQUFxRDtBQUVyRDs7R0FFRztBQUNIO0lBS0U7O09BRUc7SUFDSCxZQUFZLFVBQWtCLElBQUk7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUM7WUFDakMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQUE7UUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLHdCQUFVLENBQUM7WUFDMUIsSUFBSSxFQUFFLElBQUk7WUFDVixZQUFZLEVBQUUsVUFBVSxDQUFDLE9BQU87U0FDakMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQU8sQ0FBQTtRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQU8sQ0FBQTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ0gsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDaEMsQ0FBQztDQUNGO0FBMUNELDhCQTBDQyJ9