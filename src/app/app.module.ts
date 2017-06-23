import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MailBoxComponent,
    UserCardComponent
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
