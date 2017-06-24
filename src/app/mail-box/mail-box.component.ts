import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MailService } from './mail.service';
import { Mail } from './mail';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css'],
  providers: [MailService]
})
export class MailBoxComponent implements OnInit, OnDestroy {
  mailList: any[];
  mockingMails;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.mailList = [];
    this.getMailList();
  }

  getMailList(): void {
    this.mockingMails = this.mailService.getMailList().subscribe(mail => {
      this.mailList.push(mail);
    });
  }

  ngOnDestroy() {
    this.mockingMails.unsubscribe();
  }

}
