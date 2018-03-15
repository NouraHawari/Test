import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'user-group', loadChildren: '../user-group/user-group.module#UserGroupModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
            { path: 'insert-user-group', loadChildren: '../insert-user-group/insert-user-group.module#InsertUserGroupModule' },
            { path: 'update-user/:id', loadChildren: '../update-user/update-user.module#UpdateUserModule' },
            { path: 'update-group/:id', loadChildren: '../update-group/update-group.module#UpdateGroupModule' }
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
