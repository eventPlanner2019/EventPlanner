import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Planner } from 'Models/planner';
import { Router } from '@angular/router';
import { SignupService } from 'Services/signup.service';

@Component({
  selector: 'app-planner-signup',
  templateUrl: './planner-signup.component.html',
  styleUrls: ['./planner-signup.component.css']
})
export class PlannerSignupComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private route:Router) { }
  PlannerSignup:FormGroup;
  plannerData:Planner; 
  Signup=new SignupService();
  ngOnInit() {
   this.PlannerSignup=this.formbuilder.group({
      Name_Of_Company:['',Validators.required],
      Official_Phone:['',Validators.required], 
      Email:['',Validators.required],
      CIN: ['',Validators.required],
      Address:['',Validators.required],
      Contact_Name:['',Validators.required],
      Contact_Person_Phone: ['',Validators.required],
      Password: ['',Validators.required],
      Confirm_Password:['',Validators.required]
  });
}
  getData()
  {
  this.plannerData = new Planner()
    {
    this.plannerData.ID=this.PlannerSignup.controls.Email.value;
    this.plannerData.Address=this.PlannerSignup.controls.Address.value;
    this.plannerData.CorporateIdentificationNo=this.PlannerSignup.controls.CIN.value;
    this.plannerData.Email=this.PlannerSignup.controls.Email.value;
    //this.plannerData.Gender=this.PlannerSignup.controls.Gender.value;
    this.plannerData.NameOfCompany=this.PlannerSignup.controls.Name_Of_Company.value;
    this.plannerData.NumberOfYourContactPerson=this.PlannerSignup.controls.Contact_Name.value;
    this.plannerData.OfficialPhoneNO=this.PlannerSignup.controls.Official_Phone.value;
    this.plannerData.password=this.PlannerSignup.controls.Password.value;
    //this.plannerData.confirmpassword=this.PlannerSignup.controls.Confirm_Password.value();
    }
  }
 


  onSubmit()
  {
   console.log(this.PlannerSignup.valid);
   this.getData();
   this.Signup.PlannerSignup(this.route,this.plannerData);
  }


}
