import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';

import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes
  ],
  declarations: [ SignupComponent, AuthComponent, LoginComponent ]
})
export class AuthModule { }
