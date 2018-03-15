import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserGroupComponent} from './user-group.component'
import { UserGroupRoutingModule } from './user-group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserGroupRoutingModule
  ],
  declarations: [UserGroupComponent]
})
export class UserGroupModule { }
