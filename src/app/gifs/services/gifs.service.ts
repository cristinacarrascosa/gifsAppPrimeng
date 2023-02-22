import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})// Este decorador es para que el servicio sea global y único
export class GifsService {

  // listado que nos permita almacenar los gifs que se van buscando
  private _historial: string[] = [];

  // devuelve una copia del arreglo
  get historial() {
    return [...this._historial];
  }

  // Insertar en el arreglo, hay que llamarlo desde el componente de busqueda
  buscarGifs( query: string){

    // insertar al inicio del arreglo
    this._historial.unshift( query );

    console.log(this._historial);

  }

  constructor() { }
}
