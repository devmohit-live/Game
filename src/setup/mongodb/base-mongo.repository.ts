import {Collection} from 'mongodb';
import {MongodbClient} from './mongodb.client';
import {DateUtils} from "../../common/utils/date.utils";
import {BaseEntity} from "../../common/entity/base.entity";

//TODO : to solve the id errors
export abstract class BaseMongoRepository<T extends BaseEntity> {

    protected constructor(private mongodbClient: MongodbClient) {
    }

    async getCollection<T>(): Promise<Collection<T>> {
        const dbClient = await this.mongodbClient.get();
        return dbClient.db(this.dbName()).collection(this.tableName());
    }

    async insert(entity: T): Promise<void> {
        const currentDate = DateUtils.getCurrentJSDate();
        entity.createdAt = currentDate;
        entity.modifiedAt = currentDate;
        const collection = await this.getCollection();
        await collection.insertOne(entity);
    }

    async update(entity: Partial<T>): Promise<void> {
        entity.modifiedAt = DateUtils.getCurrentJSDate();
        delete entity.createdAt;
        const collection = await this.getCollection();
        const query = {_id: entity._id};
        const updateDoc = {
            $set: entity
        };
        await collection.updateOne(query, updateDoc);
    }

    abstract dbName(): string;

    abstract tableName(): string;
}
