import {BaseConfig} from './base';
import {Environment} from './constants';

export const getProdConfig = async (): Promise<BaseConfig> => {
    console.log('Getting Prod Config');
    let config: BaseConfig = {
        ENV: Environment.PROD,
        PORT: 8080,
        BASE_URL: '/',
        corsAllowedOrigin: '*',
        mongoDbConfig: {
            clusterEndpoint: 'devmohit:test@test.92jd7lm.mongodb.net/test?authMechanism=DEFAULT'
        }
    };
    return config;
};
