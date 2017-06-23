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

import { UserService } from './user-list/user.service';

const routes: Route[] = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:login', component: UserPageComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'mail', component: MailBoxComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MailBoxComponent,
    UserCardComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
