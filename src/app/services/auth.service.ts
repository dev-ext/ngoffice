import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

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

  sendPasswordResetEmail(email: string) {
    const thenable = this._auth.auth.sendPasswordResetEmail(email);
    return Observable.fromPromise(thenable);
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
