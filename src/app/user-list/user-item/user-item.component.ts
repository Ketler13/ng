import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openUserPage() {
    this.router.navigate(['/users', this.user.surname]);
  }

}
