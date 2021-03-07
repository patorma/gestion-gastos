import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',
   pathMatch: 'full',
   redirectTo: '/tablero'
  },
  {
    path:'tablero',loadChildren: () =>
    import('./components/tablero/tablero.module').then(m => m.TableroModule)
  },
  {
    path: 'login', loadChildren: () =>
    import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'gastoNuevo', loadChildren: () =>
    import('./components/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'configuracion', loadChildren: () =>
    import('./components/configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: 'gasto/editar/:id', loadChildren: () =>
    import('./components/editar-gasto/editar-gasto.module').then(m=> m.EditarGastoModule)
  },
  {
    path: 'tablero2', loadChildren: () =>
    import('./components/tablero2/tablero2.module').then(m => m.Tablero2Module)
  },
  {
    path: 'notaNueva', loadChildren:() =>
    import('./components/registro2/registro2.module').then(m => m.Registro2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
