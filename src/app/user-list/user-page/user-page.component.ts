import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(x => console.log(x))
  }

}
