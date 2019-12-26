import { AbstractControl } from '@angular/forms';

export class ValidatePassword {
    static passwordMatch(ac:AbstractControl){
let password = ac.get("Password").value;
let confirmPassword = ac.get("ConfirmPassword").value;
if(password!=confirmPassword){

    ac.get("ConfirmPassword").setErrors({matchpassword:true});


}
else{
   delete ac.errors['matchpassword'];
}
    }    
}
