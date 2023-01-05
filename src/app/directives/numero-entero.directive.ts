import { Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { NgControl, NgModel } from "@angular/forms";

@Directive({
  selector: 'input[numeroEntero]',
})
export class NumeroEnteroDirective {

  esPrimeraAsignacion: boolean = true;

  constructor(
    private ngControl: NgControl,
  ) { }

  ngOnInit(): void {
    this.ngControl.valueChanges?.subscribe((res)=>{
      if(this.esPrimeraAsignacion){
        this.esPrimeraAsignacion = false;
        this.reemplazarValor();
      }
    })
  }

  @HostListener('input', ['$event']) onChangeInput(event: Event): void {
    this.reemplazarValor();
  }

  private reemplazarValor(){

    let value = "";
    if(this.ngControl.value !== null) value = this.ngControl.value.toString();

    //regex negado
    let _value =  value.replace(/[^0-9]+/, '');

    this.ngControl.control?.setValue(_value)
  }

}
