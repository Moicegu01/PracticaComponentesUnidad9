import { Component } from '@angular/core';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-almacen',
  imports: [Producto],
  templateUrl: './almacen.html',
  styleUrl: './almacen.css',
})
export class Almacen {

  productoPadre: string = 'Teclado Mecánico';
  stockPadre: number = 10;

  actualizarDato(nuevoValor: number) {
    this.stockPadre = nuevoValor;
    console.log('El padre ha actualizado su stock a: ' + this.stockPadre);
  }
  
}
