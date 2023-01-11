import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Weather', url: '/weather', icon: 'thunderstorm' },
    { title: 'Conversor', url: '/conversor', icon: 'cash' },
    { title: 'Marvel', url: '/marvel', icon: 'disc' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Profile', url: '/profile', icon: 'person'},
    ];

  constructor() {}
}
