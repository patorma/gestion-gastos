import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarGastoRoutingModule } from './editar-gasto-routing.module';
import { EditarGastoComponent } from './editar-gasto.component';


@NgModule({
  declarations: [EditarGastoComponent],
  imports: [
    CommonModule,
    EditarGastoRoutingModule
  ]
})
export class EditarGastoModule { }
