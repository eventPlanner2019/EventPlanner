import { Component, OnInit } from '@angular/core';
import { User } from 'Models/user';
import { Router } from '@angular/router';
import {Payments} from 'Models/Models/payments';
import { PlannedEvents } from 'Models/planned-events';
import {Planner} from 'Models/Models/planner';
import { LogOutServiceService } from 'Services/log-out-service.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  
  show: boolean = true;
  show_users: boolean = false;
  show_planners: boolean = false;
  show_planned_eve: boolean = false;
  show_users_view: boolean = false;
  show_payments_rec: boolean = false;
  show_planners_view: boolean = false;
  show_payments_rec_planners: boolean = false;

  dateArrival: Date;
  selectedOption: string = '';
  logout=new LogOutServiceService(this.route);

  constructor(private route:Router) { }
  users_headers = ["Id", "Phone", "Name", "Gender", "Email", "Address"];
  users: User[] = [{id:'1', password :"*", phone : 9566, name : 'karthika', Gender : 'f', Email : 'kar@gmail.com', Address : 'KRP'},
  {id:'2', password :"*", phone : 9500, name : 'arthika', Gender : 'f', Email : 'ar@gmail.com', Address : 'KRP'},
  {id:'3', password :"*", phone : 7566, name : 'rthika', Gender : 'f', Email : 'r@gmail.com', Address : 'KRP'},
  {id:'4', password :"*", phone : 9556, name : 'swathi', Gender : 'f', Email : 'swa@gmail.com', Address : 'KRP'}];

  no_of_users : number = this.users.length;

  planners_headers = ["Id", "NameOfCompany", "OfficialPhoneNO", "CorporateIdentificationNo", "Email"];
  planners: Planner[] = [{ID:99,NameOfCompany:"Planner1",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
  {ID:99,NameOfCompany:"Planner2",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
  {ID:99,NameOfCompany:"Planner2",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000}];
  
  no_of_planners : number = this.planners.length;
  
  payments_headers = ["Payment Id", "User Id", "Amount"];
  payments: Payments[] = [{PaymentMode : '1', Planner_Id : '10', Amount : 100 },
  {PaymentMode : '2', Planner_Id : '20', Amount : 200 }, 
  {PaymentMode : '3', Planner_Id : '30', Amount : 300 }];

  total_revenue : number = 600; 

  planned_event_headers = ["Date", "Venue", "Planner Name", "User Name"];
  planned_events: PlannedEvents[] = [{Eve_Date : '01-01-2020', Venue : 'KRP', Planner_Name : "Karthi", User_Name : "Ezhil"},
  {Eve_Date : '01-01-2020', Venue : 'KRP', Planner_Name : 'Swathi', User_Name : 'Ezhil'},
  {Eve_Date : '01-01-2020', Venue : 'KRP', Planner_Name : 'Abi', User_Name : 'Ezhil'},
  {Eve_Date : '01-01-2020', Venue : 'KRP', Planner_Name : 'Partha', User_Name : 'Ezhil'},
  {Eve_Date : '01-01-2020', Venue : 'KRP', Planner_Name : 'Mahesh', User_Name : 'Ezhil'}];
  
  ngOnInit() {
  //  this.dateArrival = new Date();
  console.log(localStorage.getItem("adminlogin"));
  if(localStorage.getItem("adminlogin")===null)
  {
    this.route.navigate(['/','Home']);
  }
  }

  ShowUsersOrPlanners(selectedOption:any)
  {
    //this.route.navigate(['/','PaymentsReceived']);
    if(selectedOption == "User")
    {
     // this.show = !this.show;
      console.log("inside ..."+ selectedOption);
      this.show_users = true;
      this.show_planners = false;
      this.show_planners_view = false;

      this.show_payments_rec = false;
      this.show_payments_rec_planners = false;
      this.show_planned_eve = false;
      this.show_users_view = false;
    }
    else
    {
     // this.show = !this.show;
      console.log("inside ..."+ selectedOption);
      this.show_planners = true;
      this.show_users = false;
      this.show_planned_eve = false;
      this.show_users_view = false;
      this.show_payments_rec = false;
      this.show_planners_view = false;
      this.show_payments_rec_planners = false;
    }
  }
  selectChangeHandler(event:any)
  {
    
    this.selectedOption = event.target.value;
    this.ShowUsersOrPlanners(this.selectedOption);
    //console.log("inside ..."+ this.selectedOption);
  }
  PaymentsReceived()
  {
    console.log("PaymentsReceived");
    this.show_payments_rec = true;
    this.show_planners = false;
    //this.show_users = false;
    this.show_planned_eve = false;
    this.show_users_view =false;
    this.show_payments_rec_planners = false;
    this.show_planners_view = false;
    console.log(Payments[0]);
  }
  PaymentsReceived_Planners()
  {
    console.log("PaymentsReceived_Planners");
    this.show_payments_rec_planners = true;
    //this.show_planners = false;
    this.show_users = false;
    this.show_planned_eve = false;
    this.show_users_view =false;
    this.show_planners_view = false;
    this.show_payments_rec = false;
    console.log(Payments[0]);
  }
  PlannedEvents()
  {
    console.log("PlannedEvents");
    this.show_payments_rec = false;
    //this.show_users = false;
    this.show_planned_eve = true;
    this.show_users_view =false;
    this.show_planners_view = false;
    this.show_payments_rec_planners = false;
  }
  Users()
  {
    console.log("Users");
    this.show_payments_rec = false;
    this.show_planners = false;
    this.show_planned_eve = false;
    this.show_users_view =true;
    this.show_planners_view = false;
    this.show_payments_rec_planners = false;
    console.log("no_of_users", this.no_of_users);
  }
  Planners()
  {
    console.log("Planners");
    this.show_payments_rec = false;
    //this.show_planners = false;
    this.show_users = false;
    this.show_planned_eve = false;
    this.show_users_view = false;
    this.show_planners_view = true;
    this.show_payments_rec_planners = false;
    console.log("no_of_planners", this.no_of_planners);
  }
  UserChange(event)
  {
    if(event.target.value=="show users")
    {
      this.Users();
    }
    else if(event.target.value=="view payments")
    {
      this.PaymentsReceived();
    }
    else if(event.target.value=="Planned Events")
    {
      this. PlannedEvents();
    }
  }
  plannerChange(event)
  {
    
    if(event.target.value=="show planner")
    {
      this.Planners();
    }
    else if(event.target.value=="view payments")
    {
      this. PaymentsReceived_Planners();
    }
    else if(event.target.value=="Planned Events")
    {
      this. PlannedEvents();
    }
  }
}


