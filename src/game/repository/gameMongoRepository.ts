// import {GameRepository} from "./game.repository";
// import {Game} from "../entities/game.entity";
// import {BaseMongoRepository, MongodbClient} from "../../setup/mongodb";
// import {Inject} from "@nestjs/common";
// import {CommonProviderConstants} from "../../common/constants/provider";
// import {WithId} from "mongodb";
//
//
// //TODO : to solve the id errors
// export class GameMongoRepository extends BaseMongoRepository<Game> implements GameRepository{
//     private readonly DB_NAME = 'gamesDb';
//     private readonly TABLE_NAME = 'games';
//
//
//     constructor(@Inject(CommonProviderConstants.MONGODB_CLIENT) private client: MongodbClient) {
//         super(client);
//     }
//
//     async addGame(game: Game): Promise<void> {
//         return this.insert(game);
//     }
//
//     async deleteGame(game: Game): Promise<void> {
//         const collection =  await this.getCollection<Game>();
//         await collection.deleteOne(game);
//     }
//
//     async findGame(id: string): Promise<Game> {
//         const collection = await this.getCollection<Game>();
//         const query = { _id: id};
//         const entity = await collection.findOne(query);
//         return entity;
//     }
//
//     async getAllGames(): Promise<WithId<Game>[]> {
//         const collection = await this.getCollection<Game>();
//         return await collection.find().toArray();
//     }
//
//     async updateGame(game: Game): Promise<void> {
//         return this.update(game);
//     }
//
//     dbName(): string {
//         return this.DB_NAME;
//     }
//
//     tableName(): string {
//         return this.TABLE_NAME;
//     }
//
// }