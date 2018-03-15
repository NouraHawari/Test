import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InsertUserGroupRoutingModule } from './insert-user-group-routing.module';
import {InsertUserGroupComponent} from './insert-user-group.component';
@NgModule({
  imports: [
    CommonModule,
    InsertUserGroupRoutingModule,
    FormsModule
    
  ],
  declarations: [ InsertUserGroupComponent]
})
export class InsertUserGroupModule { }
