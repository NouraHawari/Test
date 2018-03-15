import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/services/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-user-group',
  templateUrl: './insert-user-group.component.html',
  styleUrls: ['./insert-user-group.component.scss']
})
export class InsertUserGroupComponent implements OnInit {
  public insertgroupForm={
 
      "insert_user_group":"true",
      "insert_group_name":"",
      "insert_group_description":"",
      "insert_group_admin":""
    
};
  constructor( public com : CommunicationService,  private router: Router) {
    
   }

  ngOnInit() {
  }
insert(){
  this.com.insert_group(this.insertgroupForm).subscribe(data => {
    //data = JSON.parse(data);
    this.router.navigate(['user-group']);
  });
}
}
