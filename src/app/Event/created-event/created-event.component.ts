import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutServiceService } from 'Services/log-out-service.service';


@Component({
  selector: 'app-created-event',
  templateUrl: './created-event.component.html',
  styleUrls: ['./created-event.component.css']
})
export class CreatedEventComponent implements OnInit {

  constructor(private route:Router) { }
  eventdet:any;
  logout=new LogOutServiceService(this.route);
  ngOnInit() {
    if(localStorage.getItem("userlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }
     this.eventdet=JSON.parse(localStorage.getItem("eventdetails"));
     console.log(this.eventdet);
  }
  cancel()
  {
    alert("event cancelled");
    localStorage.removeItem("subscribed");
    localStorage.removeItem("eventdetails");
    this.route.navigate(['/','userhome']);
  }
}
