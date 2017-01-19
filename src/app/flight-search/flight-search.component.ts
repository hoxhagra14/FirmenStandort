import {Component} from "@angular/core";
import {Flight} from "../entities/flight";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {FlightService} from "./services/flight.service";

@Component({
  selector: 'flight-search', // <flight-search></...>
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers:[  ]
})
export class FlightSearchComponent {

  public from: string;
  public to: string;

  public selectedFlight: Flight;

  constructor(private flightService: FlightService) {
  }

  // {{ flights }}
  public get flights(): Array<Flight> {
    return this.flightService.flights;
  }

  search(): void {
    this.flightService.find(this.from, this.to);


  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

}
