import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { PatenteMaskDirective } from './patente-mask.directive';
import { NumeroEnteroDirective } from './numero-entero.directive';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    PatenteMaskDirective,
    NumeroEnteroDirective,
  ],
  imports: [
    CommonModule,
    CurrencyMaskModule,
    NgxMaskModule,
  ],
  exports:[
    PatenteMaskDirective,
    NumeroEnteroDirective,
    CurrencyMaskModule,
    NgxMaskModule,
  ]
})
export class SharedDirectivesModule { }
