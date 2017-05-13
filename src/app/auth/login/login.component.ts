import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private _auth: AuthService,
    public fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginwithEmail(values, valid) {
    if ( valid ) {
      this._auth.loginWithEmail(values)
        .then((res) => {
          this.postSignin();
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  postSignin() {
    this._router.navigate(['/']);
  }

}
