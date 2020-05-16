class Card extends Entity{
    private static readonly type : string = "Card";

    private title : string;
    private content : CardContent;

    public constructor(
        id : string, 
        title : string, 
        content : CardContent
    ) {
        super(id, Card.type);
        this.title = title;
        this.content = content;
    }

    public getTitle() : string {
        return this.title;
    }

    public setTitle(title : string) {
        this.title = title;
    }

    public getContent() : CardContent {
        return this.content;
    }

    public setContent(content : CardContent) {
        this.content = content;
    }
}