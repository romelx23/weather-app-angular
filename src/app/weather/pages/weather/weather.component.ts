import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/weather.interface';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weather: Location | null = null;
  term: string = '';

  ngOnInit(): void {
    // this.weatherService.getWeather('Sao Paulo').subscribe((data) => {
    //   this.weatherService.weather = data;
    //   this.weather = this.weatherService.weatherData;
    // });
  }
  getWeather(search: Location) {
    // console.log(search);
    this.weather = search;
  }
  getTerm(term: string) {
    this.term = term;
  }
}
