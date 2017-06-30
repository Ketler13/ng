import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../user.service';
import { User } from '../../user'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap(params => this.userService.getUser(params.id))
      .subscribe(user => {
        this.user = user;
        this.createForm();
      });
  }

  createForm(): void {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, Validators.required, [this.checkEmailUnique.bind(this)]]
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }

  submit() {
    this.userService.setUserData(this.userForm.value, this.user.id)
      .switchMap(_ => this.userService.getUser(this.user.id))
      .subscribe(newUser => this.user = newUser);
  }

  checkEmailUnique(formControl) {
    return this.userService.checkEmailUnique(formControl.value);
  }

}
