import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = "http://localhost:8080/searchevent/all";
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.eventUrl}`);
  }
}
