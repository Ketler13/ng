import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework 3';
  private isVidgetOpen: boolean;

  constructor() {
    this.isVidgetOpen = false;
  }

  toggleVidget() {
    this.isVidgetOpen = !this.isVidgetOpen;
  }
}
