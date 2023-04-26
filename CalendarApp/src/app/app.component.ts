import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainService } from './main.service';
import { Event } from './event/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  selected: Date | null;

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  constructor(private mainService: MainService){}

  addEvent(){
    const eName = this.nameInputRef.nativeElement.value;
    const eDesc = this.descriptionInputRef.nativeElement.value;
    const newEvent = new Event(eName, eDesc, this.selected);

    this.mainService.addEvent(newEvent);
  }
}
