import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value !== undefined && value !== null) {
      var num_parts = value.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `${num_parts.join(",")}`;
    } else {
      return '';
    }
  }
}
