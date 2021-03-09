import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from '../../models/gasto.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './Detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
// Estamos colocando la la instacia de gasto en detalles component
@Input() gasto: Gasto
titulo: string = 'Detalle del gasto';

  constructor(public modalService:ModalService) { }

  ngOnInit(): void {
  }
  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
