import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  // https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === 'true') {
      return true;
    }
    return true;
  }

  public getUserType(): string {
    return localStorage.getItem('userType');
  }
}
