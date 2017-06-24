import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';

import { MockMail } from './mock-mail';
import { Mail } from './mail';

@Injectable()
export class MailService {

  getMailList() {
    return Observable
      .from(MockMail)
      .concat(
        Observable
          .interval(2000)
          .map(x => MockMail[Math.floor(Math.random() * MockMail.length)])
      )
  }

}
