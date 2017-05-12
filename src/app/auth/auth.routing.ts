import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from '../services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';

const authRoutes: Routes = [
  { path: '', component: AuthComponent,
    children: [
    { path: 'signup', component: SignupComponent, canActivate: [ AuthGuard ]},
    { path: 'login', component: LoginComponent, canActivate: [ AuthGuard ] },
    { path: 'reset', component: ResetComponent, canActivate: [ AuthGuard ] },

    { path: '', redirectTo: 'login' }
  ]
 }
];

export const AuthRoutes = RouterModule.forChild(authRoutes);
