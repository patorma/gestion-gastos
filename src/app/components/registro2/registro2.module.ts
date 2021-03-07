import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Registro2RoutingModule } from './registro2-routing.module';
import { Registro2Component } from './registro2.component';


@NgModule({
  declarations: [Registro2Component],
  imports: [
    CommonModule,
    Registro2RoutingModule
  ]
})
export class Registro2Module { }
