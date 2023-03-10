import {BaseConfig} from './base';
import {Environment} from './constants';

export const getProdConfig = async (): Promise<BaseConfig> => {
    let config: BaseConfig = {
        ENV: Environment.PROD,
        PORT: 8080,
        BASE_URL: '/',
        corsAllowedOrigin: '*',
        mongoDbConfig: {
            clusterEndpoint: process.env.MONGO_URI
        }
    };
    return config;
};
