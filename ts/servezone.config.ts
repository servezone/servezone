import * as plugins from './servezone.plugins'

export interface IServezoneConfig {
    port: number
    authToken: string
};

export let config: IServezoneConfig;
