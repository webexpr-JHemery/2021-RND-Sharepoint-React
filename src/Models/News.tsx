export class News {
    public id: number;
    public title: string;
    public description: string;
    public image: string;



    constructor(data: any) {
        this.id = data.ID
        this.title = data.Title
        this.description = data.Description
        this.image = data.Image
    }

}