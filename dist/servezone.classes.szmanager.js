"use strict";
/**
 * SzManager - Description
 */
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
// classes
const servezone_classes_szapp_1 = require("./servezone.classes.szapp");
/**
 * class SzManager
 * provides the API against which to schedule apps
 */
class SzManager {
    /**
     * constructor, sets up smartsocket
     */
    constructor(portArg = 4567) {
        this.appStore = new plugins.lik.Objectmap();
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
        // adds an app to the socket
        let socketAddApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                return yield this.addApp(dataArg.appJSON);
            }),
            funcName: 'addApp'
        });
        let socketUpdateApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                return yield this.updateApp(dataArg.appJSON);
            }),
            funcName: 'updateApp'
        });
        let socketCheckApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                return yield this.checkApp(dataArg.appJSON);
            }),
            funcName: 'updateApp'
        });
        this.smartsocket.addSocketRoles([roleCi, roleSwarmCluster]);
    }
    /**
     * checks if a specific app is part of the servezone cluster and if yes returns data about it
     */
    checkApp(appJsonArg, shipzoneData) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkedApp = this.appStore.find(szAppArg => {
                return (appJsonArg.name === szAppArg.appJson.name);
            });
            return checkedApp;
        });
    }
    /**
     * updates an app that is in the cluster
     */
    updateApp(appJsonArg, shipzoneData) {
        return __awaiter(this, void 0, void 0, function* () {
            let describedApp = yield this.checkApp(appJsonArg);
            if (describedApp) {
            }
        });
    }
    /**
     * adds a new app to the cluster
     */
    addApp(appJsonArg, shipzoneData) {
        return __awaiter(this, void 0, void 0, function* () {
            // make sure app does not exist yet
            let describedApp = yield this.checkApp(appJsonArg);
            if (!describedApp) {
                let newSzApp = new servezone_classes_szapp_1.SzApp(appJsonArg);
                this.appStore.add(newSzApp);
                newSzApp.deploy();
                return appJsonArg;
            }
            else {
                return null;
            }
        });
    }
    /**
     * starts a smartsocket server
     */
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            this.smartsocket.startServer();
            yield plugins.smartdelay.delayFor(1000); // hack, but no better solution for now.
        });
    }
    /**
     * terminate Servezone Manager
     */
    terminate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.smartsocket.closeServer();
        });
    }
}
exports.SzManager = SzManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7OztBQUVILCtDQUE4QztBQUM5Qyw2Q0FBcUQ7QUFJckQsVUFBVTtBQUNWLHVFQUFpRDtBQUdqRDs7O0dBR0c7QUFDSDtJQVNFOztPQUVHO0lBQ0gsWUFBYSxVQUFrQixJQUFJO1FBUm5DLGFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFTLENBQUE7UUFTM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUM7WUFDakMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQUE7UUFFRixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksd0JBQVUsQ0FBQztZQUMxQixJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxVQUFVLENBQUMsT0FBTztTQUNqQyxDQUFDLENBQUE7UUFFRixnQ0FBZ0M7UUFDaEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3hELElBQUksRUFBRSxRQUFRO1lBQ2QsWUFBWSxFQUFFLFVBQVUsQ0FBQyw2QkFBNkI7U0FDdkQsQ0FBQyxDQUFBO1FBRUYsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QixJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3hELFlBQVksRUFBRSxDQUFFLE1BQU0sQ0FBRTtZQUN4QixPQUFPLEVBQUUsQ0FBTyxPQUFrRCxFQUFFLEVBQUU7Z0JBQ3BFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzNDLENBQUMsQ0FBQTtZQUNELFFB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