import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tablero2Component } from './tablero2.component';

const routes: Routes = [
  {path: '', component: Tablero2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tablero2RoutingModule { }
