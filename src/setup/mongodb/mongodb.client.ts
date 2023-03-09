// import {MongoClient} from 'mongodb';
//
// export interface MongodbOptions {
//     clusterEndpoint: string,
// }
//
// export class MongodbClient {
//     private _client: MongoClient;
//     private readonly _clusterEndpoint: string;
//
//     constructor(private options: MongodbOptions) {
//         this._clusterEndpoint = options.clusterEndpoint;
//     }
//
//     public async get(): Promise<MongoClient> {
//         if (this._client) {
//             return this._client;
//         }
//         const mongoClient = new MongoClient(`mongodb+srv://${this._clusterEndpoint}`);
//
//         this._client = await mongoClient.connect();
//         console.log('Monog db client is', mongoClient, this._client)
//         return this._client;
//     }
// }
