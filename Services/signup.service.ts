import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'Models/user';
import { Planner } from 'Models/planner copy';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
  userSignup(route :Router,userSignup:User){

    route.navigate(['/','Home']);
  }
  PlannerSignup(route :Router,plannerSignup:Planner){
    route.navigate(['/','createpage'])
 
  }

}
