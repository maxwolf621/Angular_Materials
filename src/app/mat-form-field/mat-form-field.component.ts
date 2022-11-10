import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { map, Observable, debounceTime } from 'rxjs';

export class MatErrorState implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-mat-form-field',
  templateUrl: './mat-form-field.component.html',
  styleUrls: ['./mat-form-field.component.css'],
  providers: [{ provide: MatErrorState, useClass: MatErrorState }],
})
export class MatFormFieldComponent implements OnInit {
  MatErrorState = new MatErrorState();
  intro!: string;
  surveyForm!: FormGroup;
  countries$!: Observable<any[]>;

  majorTechList = [
    {
      name: 'FrontEnd',
      items: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'BackEnd',
      items: ['C#', 'NodeJs', 'Go'],
    },
  ];

  // mat-select+mat-option
  interestList = [
    { id: 0, name: 'VideoGame' },
    { id: 1, mame: 'Movie' },
    { id: 2, name: 'Sport' },
    { id: 3, name: 'Reading' },
  ];

  constructor(private httpClient: HttpClient) {
    this.surveyForm = new FormGroup({
      intro: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      country: new FormControl(''),
      majorTech: new FormControl(''),
      interest: new FormControl(''),
    });
  }
  ngOnInit() {
    this.surveyForm
      .get('country')
      .valueChanges.pipe(debounceTime(300))
      .subscribe((inputCountry) => {
        this.countries$ = this.httpClient
          .get<any[]>('assets/countries.json')
          .pipe(
            map((countries) => {
              return countries.filter(
                (country) => country.name.indexOf(inputCountry) >= 0
              );
            })
          );
      });
  }
  onSubmit() {
    console.log('submit');
  }
}
