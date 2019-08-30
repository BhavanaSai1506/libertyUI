import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarTestComponent } from './navbar-test/navbar-test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  {path:'',redirectTo:"dashboard", pathMatch : 'full'},
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"navbar-test",
    component:NavbarTestComponent
  },
  {
    path:"nav-bar",
    component:NavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
