import { IAppJSON } from 'smartapp';
export declare type TSzAppStatus = 'created' | 'running' | 'updating' | 'terminating' | 'paused' | 'maintenance';
export declare class SzApp {
    appJson: IAppJSON;
    status: TSzAppStatus;
    deployHistory: string[];
    constructor(appJsonArg: IAppJSON);
    /**
     * deploys the app to the servezone cluster
     */
    deploy(): void;
    /**
     * syncs the state of the app with the servezone cluster
     */
    syncState(): void;
}
