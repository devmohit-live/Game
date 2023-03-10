import {Inject, Module, OnApplicationBootstrap} from '@nestjs/common';
import {mongoDbClient,} from './providers';
import {CommonProviderConstants} from './constants/provider';
import {MongodbClient} from '../setup/mongodb';

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: CommonProviderConstants.MONGODB_CLIENT,
            useFactory: () => mongoDbClient()
        }
    ],
    exports: [
        CommonProviderConstants.MONGODB_CLIENT,
    ]
})

export class CommonsModule implements OnApplicationBootstrap {

    constructor(@Inject(CommonProviderConstants.MONGODB_CLIENT) private mongodbClient: MongodbClient) {
    }

    async onApplicationBootstrap(): Promise<any> {
        console.log('Verifying Clients')
        await this.mongodbClient.get();
    }

}