import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent {

  cargando:string = undefined;

  constructor( public _ps: ProductosService) { }



}
