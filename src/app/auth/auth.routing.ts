import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';

const authRoutes: Routes = [
  { path: '', component: AuthComponent,
    children: [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reset', component: ResetComponent },

    { path: '', redirectTo: 'login' }
  ]
 }
];

export const AuthRoutes = RouterModule.forChild(authRoutes);
