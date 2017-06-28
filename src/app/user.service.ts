import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { User } from './user';

@Injectable()
export class UserService {
  private URL: string;

  constructor(private http: Http) {
    this.URL = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg'
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.URL)
      .map(res => res.json() as User[])
      .catch(err => Observable.throw(err))
  }

}
