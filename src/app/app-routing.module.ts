import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Home1Component } from './components/home/home1/home1.component';
// import { Home2Component } from './components/home/home2/home2.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home', loadChildren: () => import(`./components/home/home.module`).then(m => m.HomeModule),
    canActivate: [AuthGuard]
    // children: [
    //   {
    //     path: 'home1', component: Home1Component,
    //   },
    //   {
    //     path: 'home2', component: Home2Component,
    //   }
    // ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
