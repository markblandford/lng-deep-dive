import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { AirportService } from './airport.service';

@Component({
  selector: 'flight-workspace-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {
  airports$: Observable<string[]>;

  constructor(private airportService: AirportService) {}

  ngOnInit(): void {
    this.airports$ = this.airportService.findAll().pipe(delay(5000), share());
  }
}
