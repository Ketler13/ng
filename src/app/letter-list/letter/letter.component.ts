import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from '../letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {
  @Input() letter: Letter;
  @Output() remove = new EventEmitter<string>();

  private isOpen: boolean;
  private initialTime: number;

  constructor() {
    this.isOpen = false
  }

  ngOnInit() {
    this.initialTime = Date.now()
  }

  ngOnDestroy() {
    console.log(Date.now() - this.initialTime)
  }

  toggleText(): void {
    this.isOpen = !this.isOpen
  }

  removeLetter(): void {
    this.remove.emit(this.letter.id)
  }

}
