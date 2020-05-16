class Dashboard extends Entity {
    private static readonly type : string = "Dashboard";

    private title : string;
    private rails: Rail[];

    public constructor(
        id : string, 
        title : string, 
        rails : Rail[]
    ) {
        super(id, Dashboard.type)
        this.title = title;
        this.rails = rails;
    }

    public getTitle() : string {
        return this.title;
    }

    public setTitle(title : string) {
        this.title = title;
    }

    public getRails() : Rail[] {
        return this.rails;
    }

    public setRails(rails : Rail[]) {
        this.rails = rails;
    }
}