import {MongodbClient} from '../setup/mongodb';
import {Config} from '../setup/config';

export const mongoDbClient = () => {
    return new MongodbClient({
        clusterEndpoint: Config.config.mongoDbConfig.clusterEndpoint
    });
};
