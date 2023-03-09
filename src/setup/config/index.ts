import {BaseConfig} from './base';
import {getProdConfig} from './prod';
import {getDevConfig} from './dev';
import {Environment} from './constants';

const ENV = process.env.NODE_ENV;

export class Config {
    private static _config: BaseConfig;

    private constructor() {
    }

    public static async init() {
        console.log('Inside Init')
        if (this._config) {
            return;
        }
        switch (ENV) {
            case 'production':
            case Environment.PROD:
                this._config = await getProdConfig();
                break;
            case Environment.DEV:
            default:
                this._config = await getDevConfig();
                break;
        }
    }

    public static get config() {
        if (this._config) {
            return this._config;
        }
        return this._config;
    }

    public static get isProduction() {
        return ENV == "production" || ENV == "prod";
    }
}



