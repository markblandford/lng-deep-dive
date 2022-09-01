// src/app/shared/validation/city-validation.directive.ts

// forwardRef importieren:
import { Directive, Input } from '@angular/core';

// Diesen Import ergänzen:
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[city][planet]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidationDirective,
      multi: true
    }
  ]
})
export class CityValidationDirective implements Validator {
  @Input() city: Array<string>;
  @Input() planet: string;

  public validate(c: AbstractControl): ValidationErrors {
    const validCities = ['Graz', 'Hamburg', 'Frankfurt', 'Wien', 'Mallorca'];

    if (validCities.indexOf(c.value) >= 0) {
      return {};
    }
    console.log('planet', this.planet);

    return {
      city: {
        actualCity: c.value,
        validCities
      }
    };
  }
}
