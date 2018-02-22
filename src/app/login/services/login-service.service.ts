import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Login } from '../bo/login';

@Injectable()
export class LoginService {

  constructor(private router: Router, public snackBar: MatSnackBar) { }

  checkUserLogin(data: Login) {
    if (data.password && data.username) {
      if (data.username === 'admin@vestedu.com') {
        this.router.navigate(['admin']);
      } else if (data.username === 'user@vestedu.com') {
        this.router.navigate(['borrower']);
      } else if (data.username === 'invest@vestedu.com') {
        this.router.navigate(['investor']);
      } else {
        this.snackBar.open('Invalid username.', '', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Username/Password cannot be empty.', '', { duration: 3000 });
    }
  }
}
