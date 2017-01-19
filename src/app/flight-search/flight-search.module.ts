
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FlightSearchComponent} from "./flight-search.component";
import { FlightCardComponent } from './flight-card.component';
import { FlightSearchRouterModule } from './flight-search.routes';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightService } from './services/flight.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FlightSearchRouterModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    PassengerSearchComponent
  ],
  providers: [
    FlightService
  ]
})
export class FlightSearchModule {

}
