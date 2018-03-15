import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/services/index';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import {FormsModule, FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss']
})
export class UpdateGroupComponent  {
  ugrp_id=null;
  updateForm=  {
    "update_user_group":true,
    "update_group_name" :"",
    "update_group_description":"",
    "update_group_admin":""
   
  }
  user_groups={
    "ugrp_id": "",
    "ugrp_name": "",
    "ugrp_desc": "",
    "ugrp_admin": ""
  }
  constructor( public com : CommunicationService,private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => this.ugrp_id=params);
    }
 
  ngOnInit(params) {
    this.com.getUserGroups( this.ugrp_id.id).subscribe(data => {
      for(var i=0;i<data.user_groups.length;i++)
      {
       // console.log(this.ugrp_id);
       if (this.ugrp_id.id==data.user_groups[i].ugrp_id){
        this.updateForm.update_group_name=data.user_groups[i].ugrp_name;
        this.updateForm.update_group_description=data.user_groups[i].ugrp_desc;
        this.updateForm.update_group_admin=data.user_groups[i].ugrp_admin;
        }
      }
      
     
    });
  }
  update(data){
    // console.log( this.updateForm);
   
     this.com.update_group(this.updateForm,this.ugrp_id.id).subscribe(data => {
       
       this.user_groups=data.updateForm;
       console.log(this.updateForm);
      
   });

this.router.navigate(['user-group']);
   }
}
