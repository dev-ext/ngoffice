import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';

import { SharedModule } from './../shared/shared.module';

import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    SharedModule
  ],
  declarations: [
    SignupComponent,
    AuthComponent,
    LoginComponent,
    ResetComponent
   ]
})
export class AuthModule { }
