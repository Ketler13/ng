import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent }       from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserPageComponent } from './user-list/user-page/user-page.component';

import  { UserService } from './user.service';

const routes: Route[] = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'users/:surname', component: UserPageComponent},
  {path: '**', redirectTo: 'users', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
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
