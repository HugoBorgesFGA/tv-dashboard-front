class Rail extends Entity {
    private static readonly type : string = "Rail";

    private title : string;
    private cards : Card[];

    public constructor(
        id : string, 
        title: string, 
        cards : Card[]
    ) {
        super(id, Rail.type);
        this.title = title;
        this.cards = cards;
    }

    public getTitle() : string {
        return this.title;
    }

    public setTitle(title : string) {
        this.title = title;
    }

    public getCards() : Card[] {
        return this.cards;
    }

    public setCards(cards : Card[]) {
        this.cards = cards;
    }
}