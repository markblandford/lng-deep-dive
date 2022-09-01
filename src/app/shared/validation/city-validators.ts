import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CityValidators {
  static validateCity(validCities: Array<string>): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
      const actual = ctrl.value;

      return validCities.indexOf(actual) === -1 ? ({ city: { actual, validCities } } as ValidationErrors) : null;
    };
  }
}
