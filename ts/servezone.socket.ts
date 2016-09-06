import * as plugins from "./servezone.plugins";

// interfaces
import { config } from "./servezone.config";

let mainSmartsocket: plugins.smartsocket.Smartsocket = new plugins.smartsocket.Smartsocket({
    port: config.port
});

export let init = () => {
    let done = plugins.q.defer();
    mainSmartsocket.startServer();
    done.resolve();
    return done.promise;
};

export let deInit = () => {
    let done = plugins.q.defer();
    if (typeof mainSmartsocket !== "undefined") {
        mainSmartsocket.closeServer();
    };
    return done.promise;
};
