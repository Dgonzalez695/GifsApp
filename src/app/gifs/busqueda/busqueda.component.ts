import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  constructor(private gisftService: GifsService){}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0 ) {
      return;
    }
    this.gisftService.buscarGift(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
