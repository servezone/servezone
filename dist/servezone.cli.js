"use strict";
// -------
// imports
// -------
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./servezone.plugins");
// main classes
require("./servezone.classes.szapp");
require("./servezone.classes.szmanager");
require("./servezone.classes.szservice");
// -------------
// setup the CLI
// -------------
let servezoneCli = new plugins.smartcli.Smartcli();
servezoneCli.standardTask().then(argv => {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlcnZlem9uZS5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixVQUFVO0FBQ1YsVUFBVTs7QUFFViwrQ0FBOEM7QUFJOUMsZUFBZTtBQUNmLHFDQUFrQztBQUNsQyx5Q0FBc0M7QUFDdEMseUNBQXNDO0FBRXRDLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBRWhCLElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUVsRCxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUk7QUFFckMsQ0FBQyxDQUFDLENBQUEifQ==