import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './commons/dashboard/dashboard.component';
import { LayoutComponent } from './commons/layout/layout.component';
import { RegisterComponent } from './commons/register/register.component';

const routes: Routes = [
  // {
  //   path:'', component:LoginComponent, pathMatch:'full', redirectTo:'login'
  // },
  // {
  //   path:'login', component:LoginComponent
  // },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
