import { Injectable } from '@angular/core';
import { EventDetails } from 'Models/Models/event-details';

@Injectable({
  providedIn: 'root'
})
export class CancelEventService {

  constructor() { }

  cancelEvent()
  {
    var event= new EventDetails();
    event.venue="vizag";
    event.planneName="Dc events";
    event.date="09/01/2020";
    localStorage.setItem("eventdetails",JSON.stringify(event));
  }
}
