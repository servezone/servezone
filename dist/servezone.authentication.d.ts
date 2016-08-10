/// <reference types="q" />
import * as plugins from "./servezone.plugins";
import { ISocketObject } from "./servezone.socket";
export declare let authenticateSocket: (socketObjectArg: ISocketObject) => plugins.q.Promise<{}>;
