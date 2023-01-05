import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadChildren: () => import('@pages/inicio/inicio.module').then(m => m.InicioModule),
      },
      {
        path: 'cambiar-password',
        loadChildren: () => import('@pages/cambiar-password/cambiar-password.module').then(m => m.CambiarPasswordModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('@pages/usuarios/usuarios.module').then(m => m.UsuariosModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
