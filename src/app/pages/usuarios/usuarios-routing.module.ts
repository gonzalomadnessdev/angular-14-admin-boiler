import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearModificarUsuarioComponent } from './crear-modificar-usuario/crear-modificar-usuario.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
  },
  {
    path: ':id',
    component: CrearModificarUsuarioComponent,
  },
  {
    path: 'crear',
    component: CrearModificarUsuarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
