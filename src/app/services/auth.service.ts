import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

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
    return new Promise((resolve, reject) => {
      this._auth.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  loginWithEmail(values) {
    return new Promise((resolve, reject) => {
      this._auth.auth.signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  signOut(): void {
    this._auth.auth.signOut();
  }


}
