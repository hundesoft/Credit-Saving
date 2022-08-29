import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './commons/dashboard/dashboard.component';
import { LayoutComponent } from './commons/layout/layout.component';
import { PayrollComponent } from './commons/payroll/payroll.component';
import { RegisterComponent } from './commons/register/register.component';
import { UserComponent } from './commons/user/user.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path:'users',
        component:UserComponent
      },
      {
        path:'payrolls',
        component:PayrollComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
