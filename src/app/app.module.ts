import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { GastosComponent } from './components/gastos/gastos.component';

import { NotasComponent } from './components/notas/notas.component';
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';


import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoEncontradoComponent,
    GastosComponent,
    NotasComponent,
    EditarNotaComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
