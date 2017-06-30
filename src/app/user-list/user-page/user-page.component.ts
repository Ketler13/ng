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
  emailError: boolean;
  nameError: boolean;
  surnameError: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.emailError = false;
    this.nameError = false;
    this.surnameError = false;
  }

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
      name: [this.user.name, [Validators.required, this.checkLength.bind(this)]],
      surname: [this.user.surname, [Validators.required, this.checkLength.bind(this)]],
      email: [this.user.email, Validators.required, [this.checkEmailUnique.bind(this)]]
    });

    this.userForm.controls.email.statusChanges
      .subscribe(status => this.emailError = (status === 'VALID') ? false : true);

    this.userForm.controls.name.statusChanges
      .subscribe(status => this.nameError = (status === 'VALID') ? false : true);

    this.userForm.controls.surname.statusChanges
      .subscribe(status => this.surnameError = (status === 'VALID') ? false : true);
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }

  submit(): void {
    this.userService.setUserData(this.userForm.value, this.user.id)
      .switchMap(_ => this.userService.getUser(this.user.id))
      .subscribe(newUser => this.user = newUser);
  }

  checkEmailUnique(formControl): Observable<boolean | {}> {
    return this.userService.checkEmailUnique(formControl.value);
  }

  checkLength(formControl) {
    return formControl.value.length > 4 ? null : {error: 'small length'}
  }

}
