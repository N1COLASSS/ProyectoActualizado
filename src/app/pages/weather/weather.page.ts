import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  pageTitle = 'Weather';
  image = 'weather.png';
  pageIcon = `../../assets/img/${this.image}`;

  constructor() { }

  ngOnInit() {
  }

}
