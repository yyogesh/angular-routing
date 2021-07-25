import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeComponent } from '../employee/employee.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'about', loadChildren: () => import(`../about/about.module`).then(m => m.AboutModule) },
      { path: 'contact', loadChildren: () => import(`../contact/contact.module`).then(m => m.ContactModule) },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employee/:id', component: EmployeeDetailComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
