import { Component, OnInit } from '@angular/core';

import { Login } from './bo/login';
import { LoginService } from './services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.checkUserLogin(this.loginData);
  }

}
