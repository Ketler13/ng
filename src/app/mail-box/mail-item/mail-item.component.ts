import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {
  @Input() mail: Mail;

  constructor() { }

  ngOnInit() {
  }

}
