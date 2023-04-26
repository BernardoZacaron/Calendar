import { Component } from '@angular/core';
import { Event } from './event.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  constructor(private mainService: MainService){}

  allEvents: Event[] = this.mainService.getEvents();
  
}
