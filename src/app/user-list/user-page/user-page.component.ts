import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  emailInvalid: boolean;
  nameInvalid: boolean;
  surnameInvalid: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.emailInvalid = false;
    this.nameInvalid = false;
    this.surnameInvalid = false;
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
      .subscribe(status => this.emailInvalid = (status === 'VALID') ? false : true);

    this.userForm.controls.name.statusChanges
      .subscribe(status => this.nameInvalid = (status === 'VALID') ? false : true);

    this.userForm.controls.surname.statusChanges
      .subscribe(status => this.surnameInvalid = (status === 'VALID') ? false : true);

  }

  cancel(): void {
    this.router.navigate(['/users']);
  }

  submit(): void {
    this.userService.setUserData(this.userForm.value, this.user.id)
      .switchMap(_ => this.userService.getUser(this.user.id))
      .subscribe(newUser => {
        this.user = newUser;
      });
  }

  checkEmailUnique(formControl: FormControl): Observable<boolean | {}> {
    return this.userService.checkEmailUnique(formControl.value, this.user.id);
  }

  checkLength(formControl: FormControl): boolean | {} {
    return formControl.value.length > 4 ? null : {error: 'small length'}
  }

}
