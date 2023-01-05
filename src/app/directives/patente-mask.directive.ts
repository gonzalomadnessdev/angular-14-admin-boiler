import { Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { NgControl, NgModel } from "@angular/forms";

@Directive({
  selector: 'input[patenteMask]',
  providers: [NgModel],
})
export class PatenteMaskDirective implements OnInit{

  esPrimeraAsignacion: boolean = true;

  constructor(
    private readonly elRef: ElementRef,
    private ngControl: NgControl,
    private ngModel: NgModel
    ){
  }

  ngOnInit(): void {
    this.ngControl.valueChanges?.subscribe((res)=>{
      if(this.esPrimeraAsignacion){
        this.esPrimeraAsignacion = false;
        this.darFormato();
      }
    })
  }

  @HostListener('input', ['$event']) onChangeInput(event: Event): void {
  }

  @HostListener('blur', ['$event']) onBlur(event: Event): void {
    /*
    //Afecta al formControl y al input
    this.ngControl.control!.setValue("CHAU")
    //Afecta internamente al input, no asi al formControl
    this.elRef.nativeElement.value = "HOLA"
    //En resumen, el usuario va a ver "HOLA" pero el valor de fondo es "CHAU"

    console.log(this.ngControl)
    console.dir(this.elRef.nativeElement)
    */
    this.darFormato();
  }

  @HostListener('focus', ['$event']) onFocus(event: Event): void {
    this.quitarFormato();
  }

  private darFormato(){

    let value = this.ngControl.value;
    let _value =  value;

    if(this.ngControl.valid){

      if(value.length < 7){

        _value = value.slice(0,3) + " " + value.slice(3)

      }else{

        _value = value.slice(0,2) + " " + value.slice(2,5) + " " + value.slice(5)

      }

      this.ngControl.control?.setValue(value.toUpperCase())
      this.elRef.nativeElement.value = _value.toUpperCase();
    }

  }

  private quitarFormato(){
    let value = this.ngControl.value;
    let _value = value.replace(' ','')

    this.ngControl.control?.setValue(_value)
  }



}
