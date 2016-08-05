/// <reference types="socket.io" />
/// <reference types="express" />
import * as plugins from "./servezone.plugins";
export interface ISocketObject {
    socket: SocketIO.Socket;
    authenticated: boolean;
}
export declare let app: plugins.express.Express;
export declare let server: any;
export declare let io: SocketIO.Server;
