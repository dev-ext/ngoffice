import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  { path: '', component: AuthComponent,
    children: [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },

    { path: '', redirectTo: 'login' }
  ]
 }
];

export const AuthRoutes = RouterModule.forChild(authRoutes);
