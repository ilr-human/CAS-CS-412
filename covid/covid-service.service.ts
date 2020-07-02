import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getStatus(){
    // returns an observable
    return this.http.get('http://corona-api.com/countries/US?appid=a745f6bbabc0e4efa1f96ba24aa5e6db');
  }
}
