"use strict";
const plugins = require("./servezone.plugins");
// interfaces
const servezone_config_1 = require("./servezone.config");
let mainSmartsocket = new plugins.smartsocket.Smartsocket({
    port: servezone_config_1.config.port
});
exports.init = () => {
    let done = plugins.q.defer();
    mainSmartsocket.startServer();
    done.resolve();
    return done.promise;
};
exports.deInit = () => {
    let done = plugins.q.defer();
    if (typeof mainSmartsocket !== "undefined") {
        mainSmartsocket.closeServer();
    }
    ;
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLnNvY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL3NlcnZlem9uZS5zb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFFL0MsYUFBYTtBQUNiLG1DQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBRTVDLElBQUksZUFBZSxHQUFvQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ3ZGLElBQUksRUFBRSx5QkFBTSxDQUFDLElBQUk7Q0FDcEIsQ0FBQyxDQUFDO0FBRVEsWUFBSSxHQUFHO0lBQ2QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsY0FBTSxHQUFHO0lBQ2hCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxlQUFlLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUEifQ==