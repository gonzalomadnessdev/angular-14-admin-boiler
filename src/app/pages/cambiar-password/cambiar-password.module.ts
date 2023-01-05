import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambiarPasswordRoutingModule } from './cambiar-password-routing.module';
import { CambiarPasswordComponent } from './cambiar-password.component';
import { SharedModule } from '@modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CambiarPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CambiarPasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class CambiarPasswordModule { }
