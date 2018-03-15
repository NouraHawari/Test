import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { log } from 'util';
import { CommunicationService } from '../shared/services/index';
import { Router } from '@angular/router';
import {FormsModule, FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})

export class SignupComponent implements OnInit {
  

public registerForm={
    register_user:true,
    register_first_name :'' ,
    register_last_name : '',
   register_phone_number: '',
    register_email_address:'' ,
    register_newsletter: '',
    register_username:'',
    register_password: '',
    register_repeat_password: ''
};


    constructor(public router: Router, public com : CommunicationService) {
        
       
      
    }
   
    ngOnInit() {
       // this.router.navigate(['/dashboard']);
    }
    

    public onSignup() {
    
    this.com.register(this.registerForm).subscribe(data => {
                //data = JSON.parse(data);
                console.log(data);
                this.router.navigate(['/login']);

               
              } );
       
        /*
        
        //if (this.form.valid) {
           this.com.register(registreForm).subscribe(data => {
             data = JSON.parse(data);
            
            
           } )
           */
         }   

}
