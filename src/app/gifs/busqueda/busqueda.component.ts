import { Component, ElementRef, ViewChild } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

// viewChild es una propiedad que nos permite acceder a un elemento del DOM
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //ElementRef es de tipo any por defecto, le indicamos que es de tipo HTMLInputElement

  //inyectamos el servicio
  constructor( private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    // insertamos el valor en el arreglo
    this.gifsService.buscarGifs( valor );

    // Limpiar el input
    this.txtBuscar.nativeElement.value = '';
  }

}
