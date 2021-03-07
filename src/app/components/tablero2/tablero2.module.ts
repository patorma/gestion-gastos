import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tablero2RoutingModule } from './tablero2-routing.module';
import { Tablero2Component } from './tablero2.component';


@NgModule({
  declarations: [Tablero2Component],
  imports: [
    CommonModule,
    Tablero2RoutingModule
  ]
})
export class Tablero2Module { }
