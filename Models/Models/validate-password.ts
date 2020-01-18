import { AbstractControl } from '@angular/forms';

export class ValidatePassword {
    static passwordMatch(ac:AbstractControl){
let password = ac.get('Password').value;
let confirmPassword = ac.get('ConfirmPassword').value;
if(password!=confirmPassword){

    console.log('false');
    ac.get('ConfirmPassword').setErrors( {passwordMatch: true} )


}
else{
    
    console.log('true');
            return null
}
    }    
}
