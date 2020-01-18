import { Component, OnInit } from '@angular/core';
import { LogOutServiceService } from 'Services/log-out-service.service';
import { Router } from '@angular/router';
import { PlannersService } from 'Services/planners.service';

@Component({
  selector: 'app-plannerlist',
  templateUrl: './plannerlist.component.html',
  styleUrls: ['./plannerlist.component.css']
})
export class PlannerlistComponent implements OnInit {

  constructor(private route:Router,private plannerlist:PlannersService) { }
  planlist:any;
  logout=new LogOutServiceService(this.route);
  ngOnInit() {
    if(localStorage.getItem("userlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }
    this.plannerlist.arrayPlanners();
    var list=localStorage.getItem("plannerlist2");
    console.log(list);
    this.planlist=JSON.parse(list);
    console.log(JSON.parse(list));
    console.log(this.planlist[0].plannerNo);
  }
  nav()
  {
    this.route.navigate(['/','viewPlan']);
  }
  viewPlan(event)
  {
    console.log(event.target.value);
    localStorage.setItem("selectedplanner",event.target.value);
    this.route.navigate(['/','viewPlan']);
  }
}
