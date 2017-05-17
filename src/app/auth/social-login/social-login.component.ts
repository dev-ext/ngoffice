import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ngf-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {
  message: string;
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  loginWithGithub() {
    this._auth.loginWithGithub()
      .subscribe(res => {
        this._postSignup(res);
      },
      error => {
        this._signUpError(error);
      });
  }

  loginWithGoogle() {
    this._auth.loginWithGoogle()
      .subscribe(res => {
        this._postSignup(res);
      },
      error => {
        this._signUpError(error);
      });
  }

  loginWithFacebook() {
    this._auth.loginWithFacebook()
      .subscribe(res => {
        this._postSignup(res);
      },
      error => {
        this._signUpError(error);
      });
  }

    private _postSignup(values) {
    if (environment.debug) {
      console.log(values);
    }
    this._router.navigate(['/auth']);
  }

  private _signUpError(error) {
    if (environment.debug) {
      console.log(error);
    }
    this.message = error.message;
  }

}
