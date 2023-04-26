export class Event{
    public name: string;
    public description: string;
    public dateTime: Date;

    constructor(name: string, desc: string, dateTime: Date){
        this.name = name;
        this.description = desc;
        this.dateTime = dateTime;
    }
}