import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  pageTitle = 'Weather';
  image = 'weather.png';
  pageIcon = `../../assets/img/${this.image}`;

  latitude:number;
  longitude:number;

  resultados = null;

  constructor(private weatherService: WeatherService,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async getGeolocalizacion() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.weatherService.getWeather(this.latitude,this.longitude)
      .subscribe((res) => {
        this.resultados = res;
      })
    })
  }

}
