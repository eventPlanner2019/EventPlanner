import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events } from 'Models/event';
import { Router } from '@angular/router';
import { LogOutServiceService } from 'Services/log-out-service.service';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { PlannersService } from 'Services/planners.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  
 
})
export class EventsComponent implements OnInit {


minDate:Date;
searchplanner = new PlannersService();
  constructor(private formbuilder:FormBuilder,private route:Router) {
   
    this.minDate=new Date();
    
   

    
   }
EventForm:FormGroup;
eventData=new Events();
logout=new LogOutServiceService(this.route);

  ngOnInit() {
    if(localStorage.getItem("userlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }
    this.EventForm=this.formbuilder.group({
      
      NoOfguest:['',Validators.required],
      Eventdate:['',Validators.required],
      City:[''],
      BudgetRange:['',Validators.required]
     
   

    
});
console.log(localStorage.getItem("userlogin"));
}
click(){

  console.log(this.EventForm.valid);

    this.eventData.NoOfGuest=this.EventForm.controls.NoOfguest.value;
    this.eventData.EventDate=this.EventForm.controls.Eventdate.value;
    this.eventData.City=this.EventForm.controls.City.value;
    this.eventData.BudgetRange=this.EventForm.controls.BudgetRange.value;
    console.log(this.eventData.typeOfEvent);
    console.log(this.eventData.NoOfGuest);
    console.log(this.eventData.EventDate);
    console.log(this.eventData.City);
    console.log(this.eventData.BudgetRange);
    this.route.navigate(['/','plannerlist']);

}
typeOfEvent(event)
{
  //this.eventData.typeOfEvent=event.target.value;
  
  this.eventData.typeOfEvent= event.target.value;
  console.log(this.eventData.typeOfEvent)
 
}
cityChange(event)
{
  //this.eventData.typeOfEvent=event.target.value;
 
  
  this.eventData.City= event.target.value;;
  console.log(this.eventData.City)
 
}
searchPlanner()
{
  this.searchplanner.arrayPlanners(this.route,this.eventData)
}
}
