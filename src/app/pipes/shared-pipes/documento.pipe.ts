import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documento'
})
export class DocumentoPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): unknown {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
  }
}
