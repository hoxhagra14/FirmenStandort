import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {FlightService} from "./flight-search/services/flight.service";
import {BASE_URL} from './app.tokens';
import {CityPipe} from "./shared/pipes/city.pipe";
import { FlightSearchModule} from './flight-search/flight-search.module'
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
const BASE_URL_FOR_PRODUCTION = "http://www.angular.at/api/flight";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlightSearchModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: BASE_URL_FOR_PRODUCTION}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
