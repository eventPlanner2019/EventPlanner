import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserPlayment } from 'Models/user-playment';
import { Payments } from 'Models/Models/payments';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  userPayment(route :Router,userPayment:UserPlayment){

    localStorage.setItem("subscribed","true");

    route.navigate(['/','userhome']);


  }
  plannerPayment(route :Router,PlannerPayment:Payments)
  {
    console.log("ADASDA");
    route.navigate(['/','PlannerHome']);
  }
}
