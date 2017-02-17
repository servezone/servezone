"use strict";
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
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBOEM7QUFFOUMsNkNBQXFEO0FBRXJEOztHQUVHO0FBQ0g7SUFNSTs7T0FFRztJQUNILFlBQVksVUFBa0IsSUFBSTtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQztZQUMvQixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUE7UUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLHdCQUFVLENBQUM7WUFDeEIsSUFBSSxFQUFFLElBQUk7WUFDVixZQUFZLEVBQUUsVUFBVSxDQUFDLE9BQU87U0FDbkMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDSCxXQUFXO1FBQ1AsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQU8sQ0FBQTtRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDSCxlQUFlO1FBQ1gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQU8sQ0FBQTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ0gsU0FBUztRQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDbEMsQ0FBQztDQUNKO0FBM0NELDhCQTJDQztBQUFBLENBQUMifQ==