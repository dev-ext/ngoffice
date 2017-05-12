import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log('register');
  }

}
