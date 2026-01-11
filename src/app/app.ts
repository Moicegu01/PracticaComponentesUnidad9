import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Almacen } from './almacen/almacen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Almacen],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicio1_unidad9');
}
