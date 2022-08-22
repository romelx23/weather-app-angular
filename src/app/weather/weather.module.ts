import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherComponent, SearchComponent, MainComponent],
  imports: [CommonModule, WeatherRoutingModule, ReactiveFormsModule],
})
export class WeatherModule {}
