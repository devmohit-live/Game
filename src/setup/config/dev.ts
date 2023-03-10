import {BaseConfig} from './base';
import {Environment} from './constants';

export const getDevConfig = async (): Promise<BaseConfig> => {
    let config: BaseConfig = {
        corsAllowedOrigin: "*",
        PORT: 8080,
        ENV: Environment.DEV,
        BASE_URL: 'http://localhost:8080',
        mongoDbConfig: {
            clusterEndpoint: process.env.MONGO_URI
        }
    };

    return config;
};
