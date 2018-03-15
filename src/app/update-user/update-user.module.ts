import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    UpdateUserRoutingModule,
    FormsModule  
  ],
  declarations: [UpdateUserComponent]
})
export class UpdateUserModule { }
