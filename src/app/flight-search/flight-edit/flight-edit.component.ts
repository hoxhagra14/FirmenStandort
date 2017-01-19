
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { Flight } from '../../entities/flight';

@Component({
  template: `
    <h1>FlightEdit!</h1>
    <div>
      {{ message }}
    </div>
    <div *ngIf="flight">
      <div class="form-group">
        <label>Id</label>
        <input [(ngModel)]="flight.id" class="form-control">
      </div>
      <div class="form-group">
        <label>From</label>
        <input [(ngModel)]="flight.from" class="form-control">
      </div>
      <div class="form-group">
        <label>To</label>
        <input [(ngModel)]="flight.to" class="form-control">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input [(ngModel)]="flight.date" class="form-control">
      </div>
      <div class="form-group">
        <button (click)="save()" class="btn btn-default">Save</button>
      </div>
    </div>
    `
})
export class FlightEditComponent {
  id: string;
  showDetails: string;

  constructor(
    private flightService: FlightService,
    route: ActivatedRoute) {

    route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load(this.id);
      }
    )

  }

  flight: Flight;
  message: string;

  load(id: string): void {
    this
      .flightService
      .findById(id)
      .subscribe(
        flight => {
          this.flight = flight;
          this.message = "";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )
  }

  save(): void {
    this
      .flightService
      .save(this.flight)
      .subscribe(
        flight => {
          this.flight = flight;
          this.message = "Daten wurden gespeichert!";
        },
        (err) => {
          this.message = "Fehler beim Speichern: " + err.text();
        }
      )

  }

}
