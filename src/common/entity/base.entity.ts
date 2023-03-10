export interface BaseEntity {
    _id: string;
    createdAt: Date;
    modifiedAt: Date;
    isActive: boolean;
}