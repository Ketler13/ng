import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';

import { MockMail } from './mock-mail';
import { Mail } from './mail';

@Injectable()
export class MailService {
  cachedMails: Mail[];

  constructor() {
    this.cachedMails = MockMail;
  }

  getMail(id: string): Observable<Mail> {
    return Observable.of(this.cachedMails[id]);
  }

  getMailList() {
    return Observable
      .from(MockMail)
      .concat(
        Observable
          .interval(7000)
          .map(x => {
            const mail = MockMail[Math.floor(Math.random() * MockMail.length)];
            this.cachedMails.push(mail);
            return mail;
          })
      )
  }

}
