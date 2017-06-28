import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../../user.service';
import { User } from '../../user'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.userService.getUser(params.surname))
      .subscribe(user => this.user = user);
  }

  goBack() {
    this.router.navigate(['/users']);
  }

  updateInfo() {
    this.userService.setUserData(
      {
        firstName: 'igor'
      },
      this.user.surname
    ).subscribe(updatedUser => this.user = updatedUser)
  }

}
