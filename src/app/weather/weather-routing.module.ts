import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clima',
        component: WeatherComponent,
      },
      {
        path: '**',
        redirectTo: 'clima',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
