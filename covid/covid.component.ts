import { Component, OnInit } from '@angular/core';
import {STATUS} from '../data/countriesMOCK';
import {COUNTRY} from '../data/countries';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  countries: COUNTRY[] = STATUS;
  selectedCountry: COUNTRY;

  constructor() {
  }

  ngOnInit(): void {
  }

  showStatus(code: string) {
    this.selectedCountry = this.countries.find(county => county.code === code);
  }
}
