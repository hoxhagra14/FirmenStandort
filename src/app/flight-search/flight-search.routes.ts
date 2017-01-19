import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

const FLIGHT_SEARCH_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent
  }
];

export const FlightSearchRouterModule
        = RouterModule.forChild(FLIGHT_SEARCH_ROUTES);
