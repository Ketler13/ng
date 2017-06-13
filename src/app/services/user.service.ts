import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user'

@Injectable()
export class UserService {
  private url= 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';

  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
