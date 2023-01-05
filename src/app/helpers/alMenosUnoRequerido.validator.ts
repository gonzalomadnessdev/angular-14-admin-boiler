import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function alMenosUnoRequerido(): ValidatorFn {

  return (controlGroup: AbstractControl): ValidationErrors | null => {

    let validation = false;
    let controls = controlGroup.value

    for (const key in controls) {
      if (Object.prototype.hasOwnProperty.call(controls, key)
      && controls[key]
      ) {
      validation = true;
      break
      }
    }

    if ( validation ) {
      return null
    } else {
      return { alMenosUnoRequerido: true }
    }
  }

}
