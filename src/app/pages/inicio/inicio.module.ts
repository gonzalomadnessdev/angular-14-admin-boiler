import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { SharedModule } from '@modules/shared/shared.module';
import { DatoIndividualCardComponent } from '@components/dato-individual-card/dato-individual-card.component';


@NgModule({
  declarations: [
    InicioComponent,
    DatoIndividualCardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
