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
    import('./components/login/login-routing.module').then(m => m.LoginRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
