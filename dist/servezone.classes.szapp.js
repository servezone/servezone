"use strict";
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
        if (!this.deployment) {
            this.deployment = new servezone_classes_szdeployment_1.SzDeployment();
        }
    }
    /**
     * syncs the state of the app with the servezone cluster
     */
    syncState() {
    }
}
exports.SzApp = SzApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsYXNzZXMuc3phcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zZXJ2ZXpvbmUuY2xhc3Nlcy5zemFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLFVBQVU7QUFDVixxRkFBK0Q7QUFFL0Q7SUFHRSxZQUFhLFVBQW9CO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFBO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw2Q0FBWSxFQUFFLENBQUE7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7SUFFVCxDQUFDO0NBQ0Y7QUF0QkQsc0JBc0JDIn0=