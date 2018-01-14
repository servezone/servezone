/**
 * SzDeployment - Description
 */

import * as plugins from "./servezone.plugins";
import { SzApp } from "./index";
export type TSzDeploymentStatus =
  | "created"
  | "running"
  | "updating"
  | "terminating"
  | "paused"
  | "maintenance";

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
  szApp: SzApp;
  status: TSzDeploymentStatus;
  assignedNode: INode;

  constructor(szAppArg: SzApp) {
    this.szApp = szAppArg;
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
