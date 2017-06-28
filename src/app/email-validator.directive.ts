import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

function emailValidator(control) {
  return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(control.value)
}


@Directive({
  selector: '[emailValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: emailValidator,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  constructor() { }

}
