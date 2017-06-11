import { Component, OnInit } from '@angular/core';
import { LETTERS } from './mock-letters'

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {
  private showFromNewest: boolean;
  private letters = LETTERS

  constructor() {
    this.showFromNewest = true
  }

  toggleOrder() {
    this.showFromNewest = !this.showFromNewest
  }

  removeLetter(id: string): void {
    this.letters = this.letters.filter(letter => letter.id !== id)
  }

  ngOnInit() {
  }

}
