/**
 * SzDeployment - Description
 */

import * as plugins from './servezone.plugins';
export type TSzDeploymentStatus =
  | 'created'
  | 'running'
  | 'updating'
  | 'terminating'
  | 'paused'
  | 'maintenance';

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
export class SzDeployment {
  status: TSzDeploymentStatus;
  assignedNode: INode;

  constructor() {
  }

  /**
   * deploys the app to the cluster
   */
  deployToCluster() {}

  /**
   * syncs Cloudflare
   */
  syncCloudflare() {}
}
