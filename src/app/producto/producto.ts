import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {

  @Input() nombre: string = '';
  @Input() stock: number = 0;

  @Output() stockCambiado = new EventEmitter<number>();

  vender() {
    if (this.stock > 0) {
      this.stock--;
      this.stockCambiado.emit(this.stock);
    }
  }

  reponer() {
    this.stock++;
    this.stockCambiado.emit(this.stock);
  }
}
