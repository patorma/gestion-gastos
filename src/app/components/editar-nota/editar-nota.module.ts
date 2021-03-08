import { EditarNotaComponent } from './editar-nota.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarNotaRoutingModule } from './editar-nota-routing.module';


@NgModule({
  declarations: [EditarNotaComponent],
  imports: [
    CommonModule,
    EditarNotaRoutingModule
  ]
})
export class EditarNotaModule { }
