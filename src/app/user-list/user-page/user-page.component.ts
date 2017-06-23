import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [UserService]
})
export class UserPageComponent implements OnInit {
  user: User;

  constructor(private router: ActivatedRoute, private users: UserService) { }

  ngOnInit(): void {
    this.router.params
      .switchMap(params => this.users.getUser(params.login))
      .subscribe(res => this.user = res)
  }

}
