import { Component, OnInit } from '@angular/core';
import { LETTERS } from './mock-letters'

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private letters = LETTERS

}
