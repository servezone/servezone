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
// classes
const servezone_classes_szdeployment_1 = require("./servezone.classes.szdeployment");
class SzApp {
    constructor(appJsonArg) {
        this.appJson = appJsonArg;
    }
    /**
     * deploys the app to the servezone cluster
     */
    deploy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.deployment) {
                this.deployment = new servezone_classes_szdeployment_1.SzDeployment();
            }
            yield this.deployment.deployToCluster();
            yield this.deployment.syncCloudflare();
        });
    }
    /**
     * syncs the state of the app with the servezone cluster
     */
    syncState() {
    }
}
exports.SzApp = SzApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3phcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zZXJ2ZXpvbmUuY2xhc3Nlcy5zemFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsVUFBVTtBQUNWLHFGQUErRDtBQUUvRDtJQUdFLFlBQWEsVUFBb0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0csTUFBTTs7WUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNkNBQVksRUFBRSxDQUFBO1lBQ3RDLENBQUM7WUFDRCxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDdkMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3hDLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0gsU0FBUztJQUVULENBQUM7Q0FDRjtBQXhCRCxzQkF3QkMifQ==