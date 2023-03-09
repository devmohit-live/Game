import {BaseConfig} from './base';
import {Environment} from './constants';

export const getDevConfig = async (): Promise<BaseConfig> => {
    console.log('Getting Dev Config')
    let config: BaseConfig = {
        corsAllowedOrigin: "*",
        PORT: 8080,
        ENV: Environment.DEV,
        BASE_URL: 'http://localhost:8080',
        mongoDbConfig: {
            clusterEndpoint: 'devmohit:test@test.92jd7lm.mongodb.net/test?authMechanism=DEFAULT'
        }
    };

    return config;
};
