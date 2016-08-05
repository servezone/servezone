import * as plugins from "./servezone.plugins";

// interfaces
import { ISocketObject } from "./servezone.socket";



let authenticateSocket = (socketObjectArg: ISocketObject) => {
    let done = plugins.q.defer();
    
    return done.promise;
}