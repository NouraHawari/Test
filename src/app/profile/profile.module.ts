import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PageHeaderModule } from './../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, PageHeaderModule,FormsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
