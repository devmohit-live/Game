import {Collection} from 'mongodb';
import {MongodbClient} from './mongodb.client';
import {DateUtils} from "../../common/utils/date.utils";
import {BaseEntity} from "../../common/entity/base.entity";

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
        //@ts-ignore
        await collection.insertOne(entity);
    }

    async update(entity: Partial<T>): Promise<boolean> {
        entity.modifiedAt = DateUtils.getCurrentJSDate();
        delete entity.createdAt;
        const collection = await this.getCollection();
        const query = {_id: entity._id};
        const updateDoc = {
            $set: entity
        };
        const ack = await collection.updateOne(query, updateDoc);
        return ack.modifiedCount == 1;
    }

    abstract dbName(): string;

    abstract tableName(): string;
}
