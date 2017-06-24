import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { MailService } from '../mail.service';
import { Mail } from '../mail';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.css']
})
export class MailPageComponent implements OnInit {
  mail: Mail;
  error = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.mailService.getMail(params.id))
      .subscribe((mail: Mail) => this.mail = mail);
  }

  goBack(): void {
    this.router.navigate(['/mail']);
  }

}
