import { IAppJSON } from 'smartapp';
import { SzDeployment } from './servezone.classes.szdeployment';
export declare class SzApp {
    appJson: IAppJSON;
    deployment: SzDeployment;
    constructor(appJsonArg: IAppJSON);
    /**
     * deploys the app to the servezone cluster
     */
    deploy(): Promise<void>;
    /**
     * syncs the state of the app with the servezone cluster
     */
    syncState(): Promise<void>;
}
