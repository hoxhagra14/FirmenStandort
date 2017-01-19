import {Injectable, Inject} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL} from "../../app.tokens";
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs';

@Injectable()
export class FlightService {

  flights: Array<Flight> = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: Http ) {

  }

  public findById(id: string): Observable<Flight> {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
            .http
            .get(url, { headers, search })
            .map(resp => resp.json());

  }

  public save(flight: Flight): Observable<Flight> {

    let url = this.baseUrl;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    return this
            .http
            .post(url, flight, { headers })
            .map(resp => resp.json());

  }



  public find(from: string, to: string): void {

    let url = this.baseUrl;

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
          .http
          .get(url, { headers, search })
          .map(resp => resp.json())
          .subscribe(
            (flights) => {
              this.flights = flights;
            },
            (err) => {
              console.error('Fehler beim Laden', err);
            }
          );

  }

}
