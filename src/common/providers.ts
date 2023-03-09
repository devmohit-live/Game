import {MongodbClient} from '../setup/mongodb/mongodb.client';
import {Config} from '../setup/config';

export const mongoDbClient = () => {
    return new MongodbClient({
        clusterEndpoint: Config.config.mongoDbConfig.clusterEndpoint
    });
};
