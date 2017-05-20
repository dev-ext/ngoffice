import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class UnAuthGuard implements CanActivate {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this._auth.authenticated
      .take(1)
      .do(authenticated => {
        if (!authenticated) {
          this._router.navigate(['/auth/login']);
        }
      })
      .map(authenticated => !authenticated);
  }
}
