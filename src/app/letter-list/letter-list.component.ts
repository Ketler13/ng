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

  ngOnInit() {
    setInterval(() => this.pushRandomLetter(), 10000)
  }

  toggleOrder(): void {
    this.showFromNewest = !this.showFromNewest
  }

  removeLetter(id: string): void {
    this.letters = this.letters.filter(letter => letter.id !== id)
  }

  pushRandomLetter(): void {
    const x = Math.round(Math.random()) + 1
    const y = Math.floor(Math.random() * this.letters.length)
    this.letters.push(this.letters[y])
  }

}
