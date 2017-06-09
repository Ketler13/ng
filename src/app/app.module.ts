import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { LetterComponent } from './letter-list/letter/letter.component';
import { RetrospecPipe } from './retrospec.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LetterListComponent,
    LetterComponent,
    RetrospecPipe
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
