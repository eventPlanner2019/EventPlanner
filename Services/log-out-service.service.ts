import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogOutServiceService {

  
  constructor(private route:Router) 
  {
    
   }

  userLogout()
  {
    console.log("abcde");
    localStorage.removeItem("userlogin");
    this.route.navigate(['/','Home']);
  }
  plannerLogout()
  {
    localStorage.removeItem("plannerlogin");
    this.route.navigate(['/','Home']);
  }
  adminLogout()
  {
    localStorage.removeItem("adminlogin");
    this.route.navigate(['/','Home']);
  }
}
