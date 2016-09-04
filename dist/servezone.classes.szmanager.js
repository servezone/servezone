"use strict";
const plugins = require("./servezone.plugins");
const smartsocket_1 = require("smartsocket");
/**
 * class SzManager manages a servezone cluster
 */
class SzManager {
    constructor(portArg = 4567) {
        this.smartsocket = new smartsocket_1.Smartsocket({
            port: portArg
        });
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
}
exports.SzManager = SzManager;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBRS9DLDhCQUE0QixhQUFhLENBQUMsQ0FBQTtBQUUxQzs7R0FFRztBQUNIO0lBTUksWUFBWSxPQUFPLEdBQVcsSUFBSTtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQztZQUMvQixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDOztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNQLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNYLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFPLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7QUFDTCxDQUFDO0FBNUJZLGlCQUFTLFlBNEJyQixDQUFBO0FBQUEsQ0FBQyJ9