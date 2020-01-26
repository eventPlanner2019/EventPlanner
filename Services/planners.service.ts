import { Injectable } from '@angular/core';
import { Planner } from 'Models/Models/planner';
import { Router } from '@angular/router';
import { Events } from 'Models/Models/event';



@Injectable({
  providedIn: 'root'
})
export class PlannersService {

  constructor() { }
  ID:any;
  password:any;
  NameOfCompany:any;
  OfficialPhoneNO:number;
  CorporateIdentificationNo:number;
  Email:any;
  Address:any;
  NumberOfYourContactPerson:number;
  Gender:any;
  arrayPlanners(route :Router,event:Events)
  {
   
var plan:Planner[]=[{ID:99,NameOfCompany:"Marvel event planners",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
{ID:99,NameOfCompany:"Dc events",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
{ID:99,NameOfCompany:"Fox planners",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
{ID:99,NameOfCompany:"Reliance parties",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000}];
localStorage.setItem("plannerlist2",JSON.stringify(plan));
route.navigate(['/','plannerlist']);
  }
}
