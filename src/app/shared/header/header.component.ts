import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 public titulo: string = 'Control de Gastos'
 public bienvenida: string = 'Bienvenido'
 public configuracion: string = 'Configuración'
  constructor() { }

  ngOnInit(): void {
  }

}
