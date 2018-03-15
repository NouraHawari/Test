import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CommunicationService } from '../../shared/services/index';
import { Headers } from '@angular/http/src/headers';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { element } from 'protractor';


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
  
  users:any =[
  {  "uacc_id":""},
    {"uacc_email": ""},
   { "upro_first_name": ""},
    {"upro_last_name": ""},
    {"upro_phone":""},
    {"uacc_suspend": "0"},
    {"ugrp_name": ""
  }];
    constructor(public com: CommunicationService,private route: ActivatedRoute,
      private router: Router) {
     // this.route.params.subscribe(params => console.log(params));
       
    }
   

    ngOnInit() {

      this.com.getUsers(this.users).subscribe(data => {
        data.users.forEach(element => {
          element.selected = false;
        }); 
        this.users=data.users;
        
          console.log(data.users) ;
        });

}

delete( ){
  this.users.forEach((element , index) => {
   

if (element.selected==true){
  console.log(element.uacc_id);
   this.users.splice(index,1);
  this.com.delete_account(element.uacc_id).subscribe(data => {
console.log(data);
  });   //this.users=data.users;
}


});

}

}