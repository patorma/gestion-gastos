import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Registro2Component } from './registro2.component';

const routes: Routes = [
  {path: '', component: Registro2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Registro2RoutingModule { }
