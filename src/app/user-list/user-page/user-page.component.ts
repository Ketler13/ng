import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;
  error: null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private users: UserService
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap(params => this.users.getUser(params.login))
      .subscribe(
        res => this.user = res,
        error => this.error = error,
        () => console.log('completed')
      )
  }

  goBack() {
    this.router.navigate(['/users']);
  }

}
