import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';

import { User } from './user';

@Injectable()
export class UserService {
  private URL: string;
  users: object;
  isInitialRendering: boolean;

  constructor(private http: Http) {
    this.URL = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';
    this.isInitialRendering = true;
    this.users = {};
  }

  getUsers(): Observable<User[]> {
    if (this.isInitialRendering) {
      return this.http.get(this.URL)
        .map(res => {
          const users = res.json() as User[];
          users.forEach(user => this.users[user.surname] = user);
          this.isInitialRendering = false;
          return users;
        })
        .catch(err => Observable.throw(err))
    }
    const surnames = Object.keys(this.users);
    return Observable.of(surnames.map(surname => this.users[surname]));
  }

  getUser(surname: string): Observable<User> {
    return Observable.of(this.users[surname]);
  }

  setUserData(data, surname): Observable<User> {
    this.users[surname] = {
      ...this.users[surname],
      ...data
    }
    return Observable.of(this.users[surname]);
  }

}
