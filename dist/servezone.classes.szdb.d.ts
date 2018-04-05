import { Db } from "smartdata";
export declare class SzDb {
    db: Db;
    constructor(connectionOptions: any);
    connect(): Promise<void>;
    close(): Promise<void>;
}
