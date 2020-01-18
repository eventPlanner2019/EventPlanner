import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutServiceService } from 'Services/log-out-service.service';
import { Valid } from 'Models/valid';
import { CancelEventService } from 'Services/cancel-event.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  issubscribed=false;
  valid=new Valid();
  logout=new LogOutServiceService(this.route);
  Cancel= new CancelEventService();
  constructor(private route:Router) { }

  ngOnInit() {
    console.log(localStorage.getItem("userlogin"));
    if(localStorage.getItem("userlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }
    if(localStorage.getItem("subscribed")==="true")
    {
      console.log(localStorage.getItem("subscribed"))
      this.issubscribed=true;
      console.log(this.issubscribed);
    }
  }
  home()
  {
    this.route.navigate(['/','home']);
  }
  nava()
  {
    this.route.navigate(['/','createEvent'])
  }
  cancel()
  {
    this.Cancel.cancelEvent();
    this.route.navigate(['/','CreatedEvent'])
  }
}
