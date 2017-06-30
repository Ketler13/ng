import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';

import { User } from './user';
import { users } from './users-mock';

@Injectable()
export class UserService {
  private URL: string;
  users: User[];
  isInitialRendering: boolean;

  constructor(private http: Http) {
    this.URL = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';
    this.isInitialRendering = true;
    this.users = users;
  }

  getUsers(): Observable<User[]> {
    return Observable.of(this.users).delay(1000);
  }

  getUser(id: string): Observable<User> {
    return Observable.of(this.users.filter(user => user.id === id)[0]).delay(1000);
  }

  setUserData(data, id): Observable<boolean> {
    this.users = this.users
      .map(user => user.id === id ? {...user, ...data} : user);
    return Observable.of(true).delay(500);
  }

  checkEmailUnique(email: string): Observable<boolean | {}> {
    return (
      this.users.some(user => user.email === email)
      ? Observable.of({error: 'user exists'})
      : Observable.of(null)
    );
  }

}
