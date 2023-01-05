import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patente'
})
export class PatentePipe implements PipeTransform {

  transform(value: string , ...args: unknown[]): unknown {

    let _value =  value;

    if(value.length < 7){

      _value = value.slice(0,3) + " " + value.slice(3)

    }else{

      _value = value.slice(0,2) + " " + value.slice(2,5) + " " + value.slice(5)

    }

    return _value;
  }

}
