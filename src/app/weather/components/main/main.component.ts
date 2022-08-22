import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../interfaces/weather.interface';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() weather: Location | null = null;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {}
}
