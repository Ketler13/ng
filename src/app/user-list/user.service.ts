import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { User } from './user';

@Injectable()
export class UserService {
  private URL: string;
  private randomSince: number;

  constructor(private http: Http) {
    this.randomSince = Math.floor(Math.random() * 100);
    this.URL = `https://api.github.com/users?since=${this.randomSince}`;
  }

  getMail() {
    return this.http
      .get(this.URL)
      .map(data => data.json() as User[])
  }

}
