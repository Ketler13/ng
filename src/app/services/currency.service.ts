import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Currency } from './currency'

@Injectable()
export class CurrencyService {
  private url= 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  private courses: any;

  constructor(private http: Http) {
    this.courses = {}
  }

  getCourses(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then(response => response.json().forEach(c => this.courses[c.ccy] = c.buy))
      .catch(this.handleError);
  }

  fromBase(type: string, val: number): number {
    return val / this.courses[type]
  }

  toBase(type: string, val: number): number {
    return val * this.courses[type]
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
