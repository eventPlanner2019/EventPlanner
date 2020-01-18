import { Injectable } from '@angular/core';
import { Planner } from 'Models/Models/planner';



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
  arrayPlanners()
  {
   /*var  plan:Planner[] =[{ID:99,NameOfCompany:"Planner1",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
   {ID:99,NameOfCompany:"Planner2",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
   {ID:99,NameOfCompany:"Planner2",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
   ,
   {ID:99,NameOfCompany:"Planner4",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000} ,
     
}];
localStorage.setItem("plannerlist2",JSON.stringify(plan));*/
var plan:Planner[]=[{ID:99,NameOfCompany:"Marvel event planners",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
{ID:99,NameOfCompany:"Dc events",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
{ID:99,NameOfCompany:"Fox planners",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000},
{ID:99,NameOfCompany:"Reliance parties",password:"***",OfficialPhoneNO:123456,CorporateIdentificationNo:123,NumberOfYourContactPerson:123456,Email:"abcdef@fada.com",Address:"cdac byappanhalli",amount:10000}];
localStorage.setItem("plannerlist2",JSON.stringify(plan));
  }
}
