import { Component, OnInit } from '@angular/core';
import { Valid } from 'Models/valid';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'Models/user';
import { Planner } from 'Models/planner';
import { Admin } from 'Models/admin';
import { LoginService } from 'Services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valids=new Valid();
  constructor(private route:Router, private formbuilder:FormBuilder) { }
  userform:FormGroup;
  plannerform:FormGroup;
  adminform:FormGroup;
  userData:User;
  plannerData:Planner;
  adminData:Admin;
  msg:any;
  showalert=false;
  login=new LoginService(this.route);
  ngOnInit() {
    this.userform=this.formbuilder.group({
      useremail:['',Validators.required],
      userpassword:['',Validators.required]});
      this.plannerform=this.formbuilder.group({
        planneremail:['',Validators.required],
        plannerpassword:['',Validators.required]});
        this.adminform=this.formbuilder.group({
          adminemail:['',Validators.required],
          adminpassword:['',Validators.required]});
  }
  nav()
  { this.route.navigate(['/','usp'])}

  check(){ 
    
    console.log(this.userform.valid);
    if(this.userform.controls.useremail.value=="test" && this.userform.controls.userpassword.value=="test")
    {
    this.userData = new User();
      this.userData.id=this.userform.controls.useremail.value;
      this.userData.password=this.userform.controls.userpassword.value;
  console.log("function enterd");
  this.login.userLogin();
  this.route.navigate(['/','userhome'])
}
else
{
  this.showalert=true;
}
  }
  check2()
  {
    console.log("admin function enterd");
    console.log(this.adminform.controls.adminemail.value);
    if(this.adminform.controls.adminemail.value=="admin" && this.adminform.controls.adminpassword.value)
    {
      this.adminData = new Admin();
      this.adminData.ID=this.adminform.controls.adminemail.value;
      this.adminData. Password=this.adminform.controls.adminpassword.value;
  console.log("function enterd");
  this.login.adminLogin();

      console.log("admin function enterd");
      this.route.navigate(['/','admin'])

    }
   /* else
    {
      this.showalert=true;
      this.msg="check credentials";
    }*/
  }
  navp()
  {
    this.route.navigate(['/','plannersignup']) 

  }
  plannerlogin(){

 
    console.log(this.userform.valid);
    if(this.plannerform.controls.planneremail.value=="test" && this.plannerform.controls.plannerpassword.value=="test")
    {
    this.plannerData = new Planner();
      this.plannerData.ID=this.plannerform.controls.planneremail.value;
      this.plannerData.password=this.plannerform.controls.plannerpassword.value;
  console.log("function enterd");
  this.login.plannerLogin();
  this.route.navigate(['/','PlannerHome']);


  }
}
}