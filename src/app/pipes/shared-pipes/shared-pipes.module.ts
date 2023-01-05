import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDiasPipe } from './lista-dias.pipe';
import { ListaHorariosPipe } from './lista-horarios.pipe';
import { CuitPipe } from './cuit.pipe';
import { DocumentoPipe } from './documento.pipe';
import { FormatTimePipe } from './format-time.pipe';
import { MontoPipe } from './monto.pipe';
import { NumeroPipe } from './numero.pipe';
import { PatentePipe } from './patente.pipe';

@NgModule({
  declarations: [
    CuitPipe,
    DocumentoPipe,
    FormatTimePipe,
    ListaDiasPipe,
    ListaHorariosPipe,
    MontoPipe,
    NumeroPipe,
    PatentePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CuitPipe,
    DocumentoPipe,
    FormatTimePipe,
    ListaDiasPipe,
    ListaHorariosPipe,
    MontoPipe,
    NumeroPipe,
    PatentePipe
  ]
})
export class SharedPipesModule { }
