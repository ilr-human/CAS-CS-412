import {Component, OnInit} from '@angular/core';
import {CovidServiceService as covidService} from './covid-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7';
}
