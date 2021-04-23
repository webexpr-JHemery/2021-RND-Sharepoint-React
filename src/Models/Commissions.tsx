export class Commissions {
    public id: number;
    public title: string;
    public date: string;
    public president: number;
    public assesseurs: number;
    public secondUnion: number;
    public firstUnion: number;
    public place: string;
    public endDate: string;
    public isActive: boolean;


    constructor(data: any) {
        this.id = data.ID
        this.title = data.Title
        this.date = data.Date
        this.president = data.PresidentId
        this.assesseurs = data.EditorId
        this.secondUnion = data.SecondUnionId
        this.firstUnion = data.FirstUnionId
        this.place = data.Place
        this.endDate = data.EndDate
        this.isActive = data.isActive

    }

}