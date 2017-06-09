import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { LetterComponent } from './letter-list/letter/letter.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterListComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
