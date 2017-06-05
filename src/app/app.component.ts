import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      name: 'Lemmy Kilmister',
      date: '1945-12-12',
      sex: 'M',
      address: 'Los Angeles, CA',
      email: 'lemmy@lemmy.com'
    },
    {
      name: 'Joey Ramone',
      date: '1951-05-19',
      sex: 'M',
      address: 'New York, NY',
      email: 'joey@ramones.com'
    },
    {
      name: 'Rory Gallagher',
      date: '1948-03-02',
      sex: 'M',
      address: 'London, UK',
      email: 'rory@rory.com'
    },
    {
      name: 'GG Allin',
      date: '1956-08-29',
      sex: 'M',
      address: 'New York, NY',
      email: 'shit@shit.com'
    }
  ]
}
