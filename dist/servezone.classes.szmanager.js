"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        // SOCKET ROLES
        // the role of the ci
        let roleCi = new smartsocket_1.SocketRole({
            name: 'ci',
            passwordHash: 'somehash' // TODO
        });
        // the role of the swarm cluster
        let roleSwarmCluster = new plugins.smartsocket.SocketRole({
            name: 'szNode',
            passwordHash: 'someHash' // TODO: provide a valid hash
        });
        // SOCKET FUNCTIONS
        // 
        let socketAddApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                this.addApp();
            }),
            funcName: 'addApp'
        });
        let socketUpdateApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: () => __awaiter(this, void 0, void 0, function* () {
                this.updateApp();
            }),
            funcName: 'updateApp'
        });
        let socketCheckApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: () => __awaiter(this, void 0, void 0, function* () {
                this.checkApp();
            }),
            funcName: 'updateApp'
        });
        this.smartsocket.addSocketRoles([roleCi, roleSwarmCluster]);
    }
    /**
     * checks if a specific app is part of the servezone cluster and if yes returns data about it
     */
    checkApp() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * updates an app that is in the cluster
     */
    updateApp() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * adds a new app to the cluster
     */
    addApp() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * starts a smartsocket server
     */
    startServer() {
        let done = plugins.q.defer();
        this.smartsocket.startServer();
        return done.promise;
    }
    /**
     * terminate Servezone Manager
     */
    terminate() {
        this.smartsocket.closeServer();
    }
}
exports.SzManager = SzManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsNkNBQXFEO0FBRXJEOztHQUVHO0FBQ0g7SUFNRTs7T0FFRztJQUNILFlBQVksVUFBa0IsSUFBSTtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQztZQUNqQyxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FBQTtRQUVGLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSx3QkFBVSxDQUFDO1lBQzFCLElBQUksRUFBRSxJQUFJO1lBQ1YsWUFBWSxFQUFFLFVBQVUsQ0FBQyxPQUFPO1NBQ2pDLENBQUMsQ0FBQTtRQUVGLGdDQUFnQztRQUNoQyxJQUFJLGdCQUFnQixHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDeEQsSUFBSSxFQUFFLFFBQVE7WUFDZCxZQUFZLEVBQUUsVUFBVSxDQUFDLDZCQUE2QjtTQUN2RCxDQUFDLENBQUE7UUFFRixtQkFBbUI7UUFDbkIsR0FBRztRQUNILElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDeEQsWUFBWSxFQUFFLENBQUUsTUFBTSxDQUFFO1lBQ3hCLE9BQU8sRUFBRSxDQUFPLE9BQWtEO2dCQUNoRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDZixDQUFDLENBQUE7WUFDRCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUE7UUFFRixJQUFJLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQzNELFlBQVksRUFBRSxDQUFFLE1BQU0sQ0FBRTtZQUN4QixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ2xCLENBQUMsQ0FBQTtZQUNELFFBQVEsRUFBRSxXQUFXO1NBQ3RCLENBQUMsQ0FBQTtRQUVGLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDMUQsWUFBWSxFQUFFLENBQUUsTUFBTSxDQUFFO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDakIsQ0FBQyxDQUFBO1lBQ0QsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUUsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRDs7T0FFRztJQUNHLFFBQVE7O1FBRWQsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxTQUFTOztRQUVmLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0csTUFBTTs7UUFFWixDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBTyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDaEMsQ0FBQztDQUNGO0FBNUZELDhCQTRGQyJ9