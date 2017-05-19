import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'ngf-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  authstate: boolean;

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this._auth.authenticated.subscribe(authstate => {
      this.authstate = authstate;
    });
  }

  signOut() {
    this._auth.signOut();
  }

}
