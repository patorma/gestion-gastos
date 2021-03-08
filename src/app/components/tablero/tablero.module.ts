import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { TableroComponent } from './tablero.component';
import { GastosComponent } from '../gastos/gastos.component';


@NgModule({
  declarations: [TableroComponent, GastosComponent],
  imports: [
    CommonModule,
    TableroRoutingModule
  ]
})
export class TableroModule { }
