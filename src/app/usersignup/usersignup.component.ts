import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'Models/user';
import { ValidatePassword } from 'Models/validate-password';
import { Router } from '@angular/router';
import { SignupService } from 'Services/signup.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
 

  constructor(private formbuilder:FormBuilder,private route:Router) {}
  usersignup=new SignupService();
  form:FormGroup;
  userData:User; 
  ngOnInit() 
  {
    this.form=this.formbuilder.group({
          name:['',Validators.required],
          email:['',Validators.required],
          mobile:['',Validators.required],
          Dob:['',Validators.required],
          Address:['',Validators.required],
          city:['',Validators.required],
          Password:['',Validators.required],
          ConfirmPassword:['',Validators.required]
        
    },
    {
     validators:ValidatePassword.passwordMatch
    });
  }
  ValidSignup(){

    console.log(this.form.valid);
    
  
    this.userData = new User()
    {
      this.userData.id=this.form.controls.email.value;
      this.userData.password=this.form.controls.Password.value;
      this.userData.phone=this.form.controls.mobile.value;
      this.userData.name=this.form.controls.name.value
      this.userData.Gender=this.form.controls.email.value;
      this.userData.Email=this.form.controls.email.value;
      this.userData.Address=this.form.controls.Address.value;
    }
   
  
this.usersignup.userSignup(this.route,this.userData);
  }
  

}
