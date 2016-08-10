/// <reference types="socket.io" />
/// <reference types="q" />
import * as plugins from "./servezone.plugins";
import { Objectmap } from "lik";
import { IServezoneConfig } from "./servezone.config";
export interface ISocketObject {
    socket: SocketIO.Socket;
    authenticated: boolean;
}
export declare let io: SocketIO.Server;
export declare let initServer: (config: IServezoneConfig) => plugins.q.Promise<{}>;
export declare let openSockets: Objectmap;
export declare let initSocketCommunication: (config: IServezoneConfig) => void;
export declare let closeServer: () => void;
