import { SzManager } from './servezone.classes.szmanager';
/**
 * class SzCluster
 * takes care of communicating with the coreflow Container in the dockerSwarm cluster
 */
export declare class SzCluster {
    szManager: SzManager;
    constructor();
    init(optionsArg: any): void;
}
