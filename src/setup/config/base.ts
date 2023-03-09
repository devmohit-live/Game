import {Environment} from './constants';

export interface BaseConfig {
  PORT: number;
  ENV: Environment;
  BASE_URL: string;
  corsAllowedOrigin: string;
  mongoDbConfig: {
    clusterEndpoint: string;
  };
}
