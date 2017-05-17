import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ngf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  message: string;


  constructor(
    public fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerwithEmail(values, valid) {
    if (valid) {
      this._auth.registeruserWithEmail(values)
        .then((res) => { this._postSignup(res) })
        .catch(error => {
          this._signUpError(error);
        });
    } else {
      console.log('validation error');
    }
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
