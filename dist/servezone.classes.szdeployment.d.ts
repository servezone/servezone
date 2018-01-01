import { SzApp } from './index';
export declare type TSzDeploymentStatus = 'created' | 'running' | 'updating' | 'terminating' | 'paused' | 'maintenance';
/**
 * the interface for the node
 */
export interface INode {
    ip: number;
    lastDeployedAt: Date;
}
/**
 * class SzDeployment
 * describes a deployment of an app
 */
export declare class SzDeployment {
    szApp: SzApp;
    status: TSzDeploymentStatus;
    assignedNode: INode;
    constructor(szAppArg: SzApp);
    /**
     * deploys the app to the cluster
     */
    deployToCluster(): void;
    /**
     * syncs Cloudflare
     */
    syncCloudflare(): void;
}
