export abstract class BaseModel {
    abstract readonly tableName: string;
    abstract schema(): void;

    findAll() {
    }
}