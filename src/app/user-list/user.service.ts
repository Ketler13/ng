import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { User } from './user';

@Injectable()
export class UserService {
  private URL: string;
  private randomSince: number;
  private cachedUsers: object;
  private users: User[];

  constructor(private http: Http) {
    this.randomSince = Math.floor(Math.random() * 100);
    this.URL = "https://api.github.com/users";
    this.cachedUsers = {};
  }

  getUsers(): Observable<User[]> {
    if (!this.users) {
      return this.http
        .get(`${this.URL}?since=${this.randomSince}`)
        .map(data => {
          const users = data.json() as User[];
          this.users = users;
          return users;
        })
    } else {
      return Observable.of(this.users);
    }
  }

  getUser(login: string): Observable<User> {
    if (!this.cachedUsers[login]) {
      return this.http
        .get(`${this.URL}/${login}`)
        .map(data => {
          const user = data.json() as User;
          this.cachedUsers[login] = user;
          return user;
        })
        .catch(error => Observable.throw(error))
    } else {
      return Observable.of(this.cachedUsers[login]);
    }

  }

}
