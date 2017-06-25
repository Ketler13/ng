import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.setMessage();
  }

  setMessage() {
    this.message = 'logged ' + (this.auth.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.auth.login().subscribe(() => {
      this.setMessage();
      if (this.auth.isLoggedIn) {
        let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/users';
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.setMessage();
  }

}
