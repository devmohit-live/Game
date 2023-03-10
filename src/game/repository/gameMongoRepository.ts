import {GameRepository} from "./game.repository";
import {Game} from "../entities/game.entity";
import {BaseMongoRepository, MongodbClient} from "../../setup/mongodb";
import {Inject, Injectable} from "@nestjs/common";
import {CommonProviderConstants} from "../../common/constants/provider";
import {WithId} from "mongodb";


@Injectable()
export class GameMongoRepository extends BaseMongoRepository<Game> implements GameRepository {
    private readonly DB_NAME = 'gamesDb';
    private readonly TABLE_NAME = 'games';


    constructor(@Inject(CommonProviderConstants.MONGODB_CLIENT) private client: MongodbClient) {
        super(client);
    }

    ///Basic Repo functions
    async addGame(game: Game): Promise<void> {
        return this.insert(game);
    }

    async deleteGame(id: string): Promise<boolean> {
        const collection = await this.getCollection<Game>();
        const ack = await collection.deleteOne({_id: id});
        return ack.deletedCount == 1;
    }

    async findGame(id: string): Promise<Game> {
        const collection = await this.getCollection<Game>();
        const query = {_id: id, isActive: true};
        return await collection.findOne(query);
    }

    async getAllGames(): Promise<WithId<Game>[]> {
        const collection = await this.getCollection<Game>();
        return await collection.find({isActive: true}).toArray();
    }

    async updateGame(game: Game): Promise<boolean> {
        return await this.update(game);
    }


    //Basic Utility Functions
    dbName(): string {
        return this.DB_NAME;
    }

    tableName(): string {
        return this.TABLE_NAME;
    }

}