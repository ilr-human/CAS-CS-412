import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  baseURL: string = "http://corona-api.com/countries/";
  appid: string = "?appid=a745f6bbabc0e4efa1f96ba24aa5e6db";

  constructor(private http: HttpClient) { }

  getStatusByCountry(form: FormGroup){
    let countryCode = form.value.countryCode;
    return this.http.get(this.baseURL + countryCode + this.appid);
  }

  getStatus(){
    // returns an observable
    return this.http.get('http://corona-api.com/countries/US?appid=a745f6bbabc0e4efa1f96ba24aa5e6db');
  }
}
