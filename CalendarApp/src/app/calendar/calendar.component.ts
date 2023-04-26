import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  currentMonth:string = 'jan';
  days;

  constructor(private route: ActivatedRoute, private service: CalendarService){}

  ngOnInit(): void {
      this.currentMonth = this.route.snapshot.params['month'];

      this.days = this.service.getMonthDays(this.service.getMonthNumber(this.currentMonth));
  }
}
