import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstaLogueadoGuard } from '@guards/esta-logueado.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
    canActivate: [EstaLogueadoGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    pathMatch: "full",

  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
