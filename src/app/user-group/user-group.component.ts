import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './../shared/services/index';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  constructor(public com:CommunicationService) { }
  user_groups: any[] = [
{
    "ugrp_id": ""},
   { "ugrp_name": ""},
    { "ugrp_desc": ""},
   {"ugrp_admin": ""
  }];
  ngOnInit() {
    this.com.getUserGroups(this.user_groups).subscribe(data => {
      data.user_groups.forEach(element => {
        element.selected = false;
      }); 
      this.user_groups=data.user_groups;
     
       console.log(data.user_groups) ;
     });
  }
  delete(){
    this.user_groups.forEach((element , index) => {
     
  
  if (element.selected==true){
    console.log(element.ugrp_id);
     this.user_groups.splice(index,1);
    this.com.delete_group(element.ugrp_id).subscribe(data => {
  console.log(data);
    });   
  }
    
  
  });
  
  }
  
}
