import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router) { }
  userLogin()
  {
   localStorage.setItem("userlogin","user");
  }
  plannerLogin()
  {
    localStorage.setItem("plannerlogin","planner");
  }
  adminLogin()
  {  
    localStorage.setItem("adminlogin","admin");
  }
}
