import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutServiceService } from 'Services/log-out-service.service';

@Component({
  selector: 'app-viewplanner',
  templateUrl: './viewplanner.component.html',
  styleUrls: ['./viewplanner.component.css']
})
export class ViewplannerComponent implements OnInit {

  constructor(private route:Router) { }
  logout=new LogOutServiceService(this.route);
  name:any;
  currPlanner:any;
  ngOnInit() 
  {
    if(localStorage.getItem("userlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }
   this.name= localStorage.getItem("selectedplanner");
   var array=JSON.parse(localStorage.getItem("plannerlist2"));
   array.forEach(element => {
     if(element.NameOfCompany===this.name)
     {
        this.currPlanner=element;
     }
   });
  }
  pay()
  {
    this.route.navigate(['/','MakePay'])
  }
}
