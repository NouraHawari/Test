import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateGroupRoutingModule } from './update-group-routing.module';
import {UpdateGroupComponent} from './update-group.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    UpdateGroupRoutingModule,
    FormsModule
  ],
  declarations: [UpdateGroupComponent]
})
export class UpdateGroupModule { }
