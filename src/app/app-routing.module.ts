import { NgModule }                    from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { LoginComponent }     from './login/login.component';
import { UserListComponent }  from './user-list/user-list.component';
import { UserPageComponent }  from './user-list/user-page/user-page.component';
import { MailBoxComponent }   from './mail-box/mail-box.component';
import { MailPageComponent }  from './mail-box/mail-page/mail-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

// const routes: Route[] = [
//   { path: 'login', component: LoginComponent },
//   { path: 'users', component: UserListComponent },
//   { path: 'users/:login', component: UserPageComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'mail', component: MailBoxComponent, canActivate: [AuthGuardService] },
//   { path: 'mail/:id', component: MailPageComponent, canActivate: [AuthGuardService] },
//   { path: '**', component: ErrorPageComponent }
// ];

const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users',
    component: UserListComponent ,
    children: [
      { path: ':login', component: UserPageComponent }
    ]
  },
  { path: 'mail', component: MailBoxComponent, canActivate: [AuthGuardService] },
  { path: 'mail/:id', component: MailPageComponent, canActivate: [AuthGuardService] },
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
