import { NgModule } from '@angular/core';
import { AuthRoutes } from './auth.routing';

import { SharedModule } from './../shared/shared.module';
import { AuthGuard } from '../services/auth.guard';

import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { SocialLoginComponent } from './social-login/social-login.component';

@NgModule({
  imports: [
    AuthRoutes,
    SharedModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [
    SignupComponent,
    AuthComponent,
    LoginComponent,
    ResetComponent,
    SocialLoginComponent
   ]
})
export class AuthModule { }
