import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  events: Event[] = [];
  constructor(private eventService: EventService){}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events=data;
    });
  }

}
