import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GastosComponent } from './gastos.component';
import { DetalleComponent } from './detalle.component';
import { ModalService } from '../../services/modal.service';


@NgModule({
  declarations: [GastosComponent,DetalleComponent],
  imports: [
    CommonModule,
    
  ],
  providers: [ModalService]
})
export class GastosModule { }
