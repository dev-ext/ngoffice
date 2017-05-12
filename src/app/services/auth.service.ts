import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
interface USER {
  email: string,
  password: string
};
@Injectable()
export class AuthService {
  authenticated: Observable<boolean>;
  uid: Observable<string>;

  constructor(
    private _auth: AngularFireAuth,
  ) {
    this.authenticated = this._auth.authState.map(user => !!user);
    this.uid = this._auth.authState.map(user => user.uid);
  }

  registeruserWithEmail(values) {
    return this._auth.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .catch(error => {
        if (environment.debug) {
          console.log(error);
        }
      });
  }

  signOut(): void {
    this._auth.auth.signOut();
  }


}
