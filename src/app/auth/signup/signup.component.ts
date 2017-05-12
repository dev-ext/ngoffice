import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
   private _firebaseAuth: AngularFireAuth,
   public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerwithEmail(values, valid) {
    if ( valid ) {
     this.registeruserWithEmail(values);
    }else {
      console.log('validation error');
    }

  }

  registeruserWithEmail(values) {
     this._firebaseAuth.auth.createUserWithEmailAndPassword(values.email, values.password)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
      });
  }


  register() {
    console.log('register');
  }

}
