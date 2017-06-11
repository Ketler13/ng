import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from '../letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  @Input() letter: Letter;
  @Output() remove = new EventEmitter<string>();

  private isOpen: boolean;

  constructor() {
    this.isOpen = false
  }

  ngOnInit() {
  }

  toggleText(): void {
    this.isOpen = !this.isOpen
  }

  removeLetter(): void {
    this.remove.emit(this.letter.id)
  }

}
