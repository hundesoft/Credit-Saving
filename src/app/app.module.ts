import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonsModule } from './commons/commons.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonsModule,
    HttpClientModule,
    AuthModule,
    DialogModule
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
