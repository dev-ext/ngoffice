import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
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

  private _signIn(provider: firebase.auth.AuthProvider): Observable<any> {
    const thenable = this._auth.auth.
      signInWithPopup(provider);
    return Observable.fromPromise(thenable);
  }

  loginWithGithub(): Observable<any> {
    return this._signIn(new firebase.auth.GithubAuthProvider());
  }

  loginWithGoogle(): Observable<any> {
    return this._signIn(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook(): Observable<any> {
    return this._signIn(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void {
    this._auth.auth.signOut();
  }


}
