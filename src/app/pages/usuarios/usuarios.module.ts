import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '@modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from '@/directives/shared-directives.module';
import { CrearModificarUsuarioComponent } from './crear-modificar-usuario/crear-modificar-usuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    CrearModificarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    SharedDirectivesModule
  ]
})
export class UsuariosModule { }
