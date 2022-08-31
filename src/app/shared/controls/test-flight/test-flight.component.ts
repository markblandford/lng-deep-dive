import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';
import { Flight } from 'src/app/flight-booking/flight';

@Component({
  selector: 'app-test-flight',
  templateUrl: './test-flight.component.html',
  styleUrls: ['./test-flight.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TestFlightComponent implements OnDestroy {
  @Input() flight: Flight | null;

  constructor(private element: ElementRef, private zone: NgZone) {}
  ngOnDestroy(): void {
    console.log('** TestFlightComponent OnDestroy **');
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
    this.element.nativeElement.firstChild.style.backgroundColor = 'yellow';
    //              ^----- DOM-Element

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
