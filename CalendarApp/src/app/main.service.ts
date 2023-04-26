import { Event } from "./event/event.model";

export class MainService{
    private events: Event[] = [
        new Event("Test", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", new Date())
    ];

    addEvent(event: Event){
        this.events.push(event);
    }

    getEvents(){
        return this.events;
    }

    deleteEvent(index: number){
        this.events.splice(index, 1);
    }
}