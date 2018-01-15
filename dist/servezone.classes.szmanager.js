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
            name: "ci",
            passwordHash: "somehash" // TODO
        });
        // the role of the swarm cluster
        let roleSwarmCluster = new plugins.smartsocket.SocketRole({
            name: "szNode",
            passwordHash: "someHash" // TODO: provide a valid hash
        });
        // SOCKET FUNCTIONS
        // adds an app to the socket
        let socketAddApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                return yield this.addApp(dataArg.appJSON);
            }),
            funcName: "addApp"
        });
        let socketUpdateApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                return yield this.updateApp(dataArg.appJSON);
            }),
            funcName: "updateApp"
        });
        let socketCheckApp = new plugins.smartsocket.SocketFunction({
            allowedRoles: [roleCi],
            funcDef: (dataArg) => __awaiter(this, void 0, void 0, function* () {
                return yield this.checkApp(dataArg.appJSON);
            }),
            funcName: "updateApp"
        });
        this.smartsocket.addSocketRoles([roleCi, roleSwarmCluster]);
    }
    /**
     * checks if a specific app is part of the servezone cluster and if yes returns data about it
     */
    checkApp(appJsonArg, shipzoneData) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkedApp = this.appStore.find(szAppArg => {
                return appJsonArg.name === szAppArg.appJson.name;
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
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this.smartsocket.closeServer();
        });
    }
}
exports.SzManager = SzManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7OztBQUVILCtDQUErQztBQUMvQyw2Q0FBc0Q7QUFJdEQsVUFBVTtBQUNWLHVFQUFrRDtBQUdsRDs7O0dBR0c7QUFDSDtJQVFFOztPQUVHO0lBQ0gsWUFBWSxVQUFrQixJQUFJO1FBUmxDLGFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFTLENBQUM7UUFTNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUM7WUFDakMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQUM7UUFFSCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksd0JBQVUsQ0FBQztZQUMxQixJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxVQUFVLENBQUMsT0FBTztTQUNqQyxDQUFDLENBQUM7UUFFSCxnQ0FBZ0M7UUFDaEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3hELElBQUksRUFBRSxRQUFRO1lBQ2QsWUFBWSxFQUFFLFVBQVUsQ0FBQyw2QkFBNkI7U0FDdkQsQ0FBQyxDQUFDO1FBRUgsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QixJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3hELFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QixPQUFPLEVBQUUsQ0FBTyxPQUFrRCxFQUFFLEVBQUU7Z0JBQ3BFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQTtZQUNELFFB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