import { NgModule }                    from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { UserListComponent }  from './user-list/user-list.component';
import { UserPageComponent }  from './user-list/user-page/user-page.component';
import { MailBoxComponent }   from './mail-box/mail-box.component';
import { MailPageComponent }  from './mail-box/mail-page/mail-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Route[] = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:login', component: UserPageComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'mail', component: MailBoxComponent },
  { path: 'mail/:id', component: MailPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
