import { Component, OnInit } from '@angular/core';
import {STATUS} from '../data/countriesMOCK';
import {COUNTRY} from '../data/countries';
import {CovidServiceService as covidService} from './covid-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  countries: COUNTRY[] = STATUS;
  selectedCountry: COUNTRY;
  currentConfirmed: any;
  currentDeaths: any;
  currentDeathsAPI: any;
  currentConfirmedAPI: any;
  statusFormGroup: FormGroup  = new FormGroup({
    countryCode: new FormControl('US', Validators.required)
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showStatus(code: string) {
    this.selectedCountry = this.countries.find(county => county.code === code);
  }

  constructor(private covidService: covidService) {}

  // tslint:disable-next-line:typedef
  getStatus() {
    this.covidService.getStatus().subscribe(
      response => {
        this.currentConfirmed = response['data']['today']['confirmed'];
        this.currentDeaths =  response['data']['today']['deaths'];
      }
    );
  }

  getStatusByCountry(){
    this.covidService.getStatusByCountry(this.statusFormGroup).subscribe(
      response => {
        this.currentConfirmedAPI = response['data']['today']['confirmed'];
        this.currentDeathsAPI =  response['data']['today']['deaths'];
      }
    );
  }
}
