import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '../../interfaces/weather.interface';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<Location>();
  @Output() term = new EventEmitter<string>();
  error: string = '';
  searchForm = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
  });

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  campoNoValido(campo: string) {
    return (
      this.searchForm.controls[campo].errors &&
      this.searchForm.controls[campo].touched
    );
  }
  minLength(campo: string) {
    return (
      this.searchForm?.controls[campo]?.errors?.['minlength'] &&
      this.searchForm.controls[campo].touched
    );
  }
  handleSubmit() {
    console.log(this.searchForm.controls['search'].value);
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }
    this.term.emit(this.searchForm.value.search);
    this.weatherService.getWeather(this.searchForm.value.search).subscribe({
      next: (data) => {
        // console.log(data);
        this.search.emit(data);
      },
      error: (err) => {
        this.error = `No se encontró resultado`;
      },
    });
    // .subscribe((data) => {
    // this.weatherService.weather = data;
    // console.log(data);
    // this.search.emit(data);
    // },

    this.searchForm.reset();
  }
}
