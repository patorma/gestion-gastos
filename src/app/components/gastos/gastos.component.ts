import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../../models/gasto.model';
import { GastoService } from '../../services/gasto.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  @Input() gasto: Gasto
  gastos: Gasto[]
  titulo: string = 'Agregar Gasto'
  tituloCard: string = 'Listado de Gastos'
  gastoSeleccionado: Gasto;

  constructor(private gastoServicio: GastoService,public modalService:ModalService) { }

  ngOnInit(): void {

    this.gastoServicio.getGastos().subscribe(
      gastos => {
        //inicializamos la variable gastos de tipo Gasto[]
        // le asignamos los valores que entrega el get del servicio
        this.gastos = gastos
       console.log(this.gastos)
      }
    )
  }

  getGastoTotal(){
    let gastoTotal:number = 0
    if(this.gastos){
      this.gastos.map(gasto => {
        gastoTotal += gasto.valor 
      })
    }
    return gastoTotal
  } 

   // aca toma el gasto al cual hicimos click y se lo vamos asignar al atributo gastoSeleccionado
   abrirModal(gasto: Gasto) {
     console.log(gasto)
    this.gastoSeleccionado = gasto;
    this.modalService.abrirModal();
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
