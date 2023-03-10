export class GameBo {

    private readonly _id: string;
    private _name: string;
    private _url: string;
    private _author: string;
    private _publishedDate: Date;
    private _createdAt: Date;
    private _modifiedAt: Date;
    private _isActive: boolean;

    constructor(id: string) {
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get publishedDate(): Date {
        return this._publishedDate;
    }

    set publishedDate(value: Date) {
        this._publishedDate = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get modifiedAt(): Date {
        return this._modifiedAt;
    }

    set modifiedAt(value: Date) {
        this._modifiedAt = value;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }


    getFormattedDate(): string {
        return this.publishedDate.toLocaleDateString('en-US');
    }
}