import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/services/index';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import {FormsModule, FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent  {

 uacc_id=null;
  users ={
    "uacc_id":"",
    "uacc_email": "",
    "upro_first_name": "",
    "upro_last_name": "",
    "upro_phone":"",
    "uacc_suspend": "0",
    "ugrp_name": ""
  }
  updateForm=  {
    "update_users_account":true,
    "update_first_name" :"",
    "update_last_name":"",
    "update_phone_number":"",
    "update_newsletter":"",
    "update_email_address":"",
    "update_username":"",
    "update_group":""
  }
  
  constructor( public com : CommunicationService,private route: ActivatedRoute,
    public router: Router) {
    this.route.params.subscribe(params => this.uacc_id=params);
    }
  ngOnInit(params) {
    
    this.com.getUsersByid( this.uacc_id.id).subscribe(data => {
      
      console.log(data);
      this.updateForm.update_first_name=data.upro_first_name;
      this.updateForm.update_last_name=data.upro_last_name;
      this.updateForm.update_email_address=data.uacc_email;
      this.updateForm.update_phone_number=data.upro_phone;
      this.updateForm.update_username=data.uacc_username;
      this.updateForm.update_group=data.ugrp_id;
      this.updateForm.update_newsletter=data.uacc_suspend;
     
    });
  }
 
update(){
 // console.log( this.updateForm);
 event.preventDefault();
  this.com.update_account(this.updateForm,this.uacc_id.id).subscribe(data => {
    

    
    this.users=data.updateForm;
    console.log(this.updateForm);
   
});
this.router.navigate(['tables']);
}

}

