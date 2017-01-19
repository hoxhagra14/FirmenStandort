import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Flight} from "../entities/flight";

@Component({
  templateUrl: './flight-card.component.html',
  selector: 'flight-card'
})
export class FlightCardComponent {

  @Input() item: Flight;
  @Input() selectedItem: Flight;
  @Output() selectedItemChange = new EventEmitter();

  select() {
    this.selectedItemChange.next(this.item);
  }


}
