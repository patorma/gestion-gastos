import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Gasto } from '../models/gasto.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

   // va a devolver una coleccion de gastos de tipo Gasto
   gastosColeccion:AngularFirestoreCollection<Gasto>
   
   // se define un documento tipo gasto
   gastoDoc: AngularFirestoreDocument<Gasto>
   
   // Se declara los observables del gastoen bd
    gastos: Observable<Gasto[]>
    gasto: Observable<Gasto>


  constructor(private db: AngularFirestore) { 
    // indicar la coleccion a conectarme
    // segundo parametro solicitamos los elementos de forma ordenada
    this.gastosColeccion = db.collection('gastos',ref => ref.orderBy('nombre','asc'))
  }

  getGastos(): Observable<Gasto[]>{
    //Obtener los gastos
    // con pipe se recupera cada uno de los elementos de la coleccion
    //para iterar cada uno de los elementos
    this.gastos = this.gastosColeccion.snapshotChanges().pipe(
      map( cambios => {
         return cambios.map(accion => {
           // se retorna como un objeto tipo Cliente con as
           const datos = accion.payload.doc.data() as Gasto
           datos.id = accion.payload.doc.id;
           return datos
         })
      })
    );
    return this.gastos
  }
}
