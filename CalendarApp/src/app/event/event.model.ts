export class Event{
    public name: string;
    public description: string;
    public dateTime: Date | string;

    constructor(name: string, desc: string, dateTime: Date | string){
        this.name = name;
        this.description = desc;
        this.dateTime = dateTime;
    }
}