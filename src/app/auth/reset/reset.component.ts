import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'ngf-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm: FormGroup;
  message: string;

  constructor(
    private _auth: AuthService,
    public fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
     this.resetForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  resetPassword(values, valid: boolean) {
    if (environment.debug) {
      console.group('Reset Password');
      console.log(values);
    }
    if (valid) {
    this._auth.sendPasswordResetEmail(values.email)
      .subscribe(res => {
        this.message = 'Reset instruction has been send in your email.';

      }, error => {
        if (environment.debug) {
          console.log(error);
        }
        this.message = error.message;
      });
   }
  }

   private _postSignin() {
     if (environment.debug) {
      console.groupEnd();
     }
    this._router.navigate(['/auth/login']);
  }

}
