import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserPageComponent } from './user-list/user-page/user-page.component';
import { MailItemComponent } from './mail-box/mail-item/mail-item.component';
import { MailPageComponent } from './mail-box/mail-page/mail-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { UserService } from './user-list/user.service';
import { MailService } from './mail-box/mail.service';


const routes: Route[] = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:login', component: UserPageComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'mail', component: MailBoxComponent },
  { path: 'mail/:id', component: MailPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MailBoxComponent,
    UserCardComponent,
    UserPageComponent,
    MailItemComponent,
    MailPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
