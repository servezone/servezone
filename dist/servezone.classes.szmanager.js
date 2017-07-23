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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2VydmV6b25lLmNsYXNzZXMuc3ptYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsNkNBQXFEO0FBSXJELFVBQVU7QUFDVix1RUFBaUQ7QUFHakQ7OztHQUdHO0FBQ0g7SUFTRTs7T0FFRztJQUNILFlBQWEsVUFBa0IsSUFBSTtRQVJuQyxhQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBUyxDQUFBO1FBUzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDO1lBQ2pDLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFBO1FBRUYsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLHdCQUFVLENBQUM7WUFDMUIsSUFBSSxFQUFFLElBQUk7WUFDVixZQUFZLEVBQUUsVUFBVSxDQUFDLE9BQU87U0FDakMsQ0FBQyxDQUFBO1FBRUYsZ0NBQWdDO1FBQ2hDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUN4RCxJQUFJLEVBQUUsUUFBUTtZQUNkLFlBQVksRUFBRSxVQUFVLENBQUMsNkJBQTZCO1NBQ3ZELENBQUMsQ0FBQTtRQUVGLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUN4RCxZQUFZLEVBQUUsQ0FBRSxNQUFNLENBQUU7WUFDeEIsT0FBTyxFQUFFLENBQU8sT0FBa0Q7Z0JBQ2hFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzNDLENBQUMsQ0FBQTtZQUNELFFBQVEsRUFBRSxRQUFRO1NBQ25CLENB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