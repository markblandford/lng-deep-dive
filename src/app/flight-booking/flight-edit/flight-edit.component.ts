import { CityValidators } from './../../shared/validation/city-validators';
// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppCanDeactivate } from 'src/app/shared/deactivation/can-deactivate.guard';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent extends AppCanDeactivate implements OnDestroy, OnInit {
  id = 0;
  showDetails = false;
  editForm: FormGroup;
  valueChanges: Subscription;

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    super();

    this.editForm = this.buildForm(fb);
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.showDetails = p.showDetails;
      this.editForm.controls.id.patchValue(p.id);
    });

    this.valueChanges = this.editForm.valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe((_) => console.log('valueChanges: ', _));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save(): void {
    throw new Error('Not Implemented');
  }

  private buildForm(fb: FormBuilder): FormGroup {
    const validCities = ['Vienna', 'Cologne', 'Bern'];
    return fb.group({
      id: [],
      from: [null, [CityValidators.validateCity(validCities)]],
      to: [null, [CityValidators.validateCity(validCities)]],
      date: []
    });
  }

  private patchForm(): void {
    throw new Error('Not Implemented');
  }
}
