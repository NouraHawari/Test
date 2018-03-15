import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsertUserGroupComponent} from './insert-user-group.component';
const routes: Routes = [
  {
    path: '',
     component: InsertUserGroupComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertUserGroupRoutingModule { }
