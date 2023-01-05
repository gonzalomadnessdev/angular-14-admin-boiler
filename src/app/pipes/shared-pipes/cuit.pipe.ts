import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuit'
})
export class CuitPipe implements PipeTransform {

  transform(value: string | number | null , ...args: unknown[]): unknown {

    if(value == null){
      return ""
    }

    else if(typeof value == 'number'){
      value = value.toString()
    }

    value = (value).slice(0, 2) + "-" + (value).slice(2, value.length - 1) + "-" + (value).slice(value.length - 1, value.length);

    return value;
  }

}
