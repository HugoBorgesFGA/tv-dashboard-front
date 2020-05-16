abstract class Entity {
    protected readonly id : string;
    protected readonly type : string;

    protected constructor(
        id : string,
        type : string
    ) {
        this.id = id;
        this.type = type;
    }

    public getId() : string {
        return this.id;
    }

    public getType() : string {
        return this.id;
    }
}