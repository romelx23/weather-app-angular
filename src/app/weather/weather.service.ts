import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from './interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private uri: string = environment.baseUrl;
  public weather: Location | null = null;
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get<Location>(`${this.uri}&q=${city}&units=metric`);
  }
  loadWeather(city: string) {
    this.getWeather(city)
      .subscribe((data) => {
        this.weather = data;
      })
      .unsubscribe();
  }
  get weatherData() {
    return this.weather;
  }
}
