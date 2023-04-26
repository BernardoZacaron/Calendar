import { Event } from "./event/event.model";

export class MainService{
    private events: Event[] = [
        new Event("test", "test test test test test test test test test test test test test ", new Date())
    ];

    addEvent(event: Event){
        this.events.push(event);
    }

    getEvents(){
        return this.events;
    }
}