import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../services/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public loading: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => {
        this.users = users;
        this.loading = false;
      })
  }

}
