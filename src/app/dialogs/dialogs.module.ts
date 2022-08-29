import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserAccountFormComponent } from './user-account-form/user-account-form.component';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [
    RegistrationFormComponent,
    UserAccountFormComponent
  ],
  imports: [
    CommonModule,
    CommonsModule
  ]
})
export class DialogsModule { }
