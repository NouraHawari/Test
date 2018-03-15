import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGroupModule} from './user-group.module';
import {UserGroupComponent} from './user-group.component'
const routes: Routes = [
  {
    path: '',
     component: UserGroupComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupRoutingModule { }
