import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { GastosComponent } from './components/gastos/gastos.component';

import { NotasComponent } from './components/notas/notas.component';
import { EditarGastoComponent } from './components/editar-gasto/editar-gasto.component';
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';
import { Tablero2Component } from './components/tablero2/tablero2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NoEncontradoComponent,
    ConfiguracionComponent,
    GastosComponent,
    NotasComponent,
    EditarGastoComponent,
    EditarNotaComponent,
    Tablero2Component
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
