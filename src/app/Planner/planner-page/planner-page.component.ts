import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutServiceService } from 'Services/log-out-service.service';

@Component({
  selector: 'app-planner-page',
  templateUrl: './planner-page.component.html',
  styleUrls: ['./planner-page.component.css']
})
export class PlannerPageComponent implements OnInit {

  logout=new LogOutServiceService(this.route);
  constructor(private route:Router) { }
  ngOnInit() {
    console.log(localStorage.getItem("plannerlogin"));
    /*if(localStorage.getItem("plannerlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }*/
  }
  
  onClickView()
  {
   
   this.route.navigate(['/','eventdetails'])
  }

 

  onClickRequest()
  {
   this.route.navigate(['/','allrequests'])
  }
  subscribe(){

    this.route.navigate(['/','subscribeprompt']);

  }
}
