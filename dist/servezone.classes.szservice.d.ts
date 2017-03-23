import { Objectmap } from 'lik';
export declare let allSzServices: Objectmap<SzService>;
/**
 * class SzService describes a service
 */
export declare class SzService {
    /**
     * the docker image registry path to be used for the service
     */
    imagePath: string;
    /**
     * the latest available version
     */
    versionAvailable: string;
    /**
     * the version that is deployed
     */
    versionDeployed: string;
    constructor();
}
/**
 * class SzSubService extends SzService. A Subservice belongs to a Masterservice.
 */
export declare class SzSubService extends SzService {
    constructor();
}
