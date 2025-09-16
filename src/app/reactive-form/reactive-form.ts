import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, UntypedFormControl,UntypedFormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { checkAbusiveWords } from '../validators/abusive-words.validator';




@Component({
  selector: 'app-mahaveer-tour-agency',
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css']
})
export class MahaveerTourAgencyComponent implements OnInit {
 submitted?:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  
profileFormGroup = new UntypedFormGroup({
  firstName : new UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15),Validators.pattern('^[a-zA-Z ]*$'),checkAbusiveWords]),
  lastName : new UntypedFormControl(''),
  address: new UntypedFormGroup({
    addressLine1: new UntypedFormControl('',[Validators.required]),
    addressLine2: new UntypedFormControl('',Validators.required),
  })
});

formSubmit(){

}
// getters are mandatory to access the value in html tempates in errors sections.
get firstName(){
 return this.profileFormGroup.get('firstName');
}
get addressLine1(){
  return this.profileFormGroup.get('address.addressLine1');
}
get addressLine2(){
  return this.profileFormGroup.get('address.addressLine2');
}


}
