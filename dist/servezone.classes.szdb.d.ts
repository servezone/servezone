import { Db } from 'smartdata';
export declare class SzDb {
    db: Db;
    constructor();
    connect(): Promise<void>;
    close(): Promise<void>;
}
