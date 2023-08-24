import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalToValidator(otherControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const areEqual = control.value === otherControl.value;
    return areEqual ? null : { 'equalTo': true };
  };
}
