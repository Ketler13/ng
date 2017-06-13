import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Currency } from './currency'

@Injectable()
export class CurrencyService {
  private url= 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  constructor(private http: Http) {}

  getCourses(): Promise<Currency[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Currency[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
