import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  termino: string = undefined;
  cargando: string= undefined;

  constructor( private route: ActivatedRoute, public _ps: ProductosService ) {

    route.params.subscribe( parametros=>{
      this.termino = parametros['termino'];
      _ps.buscarProductos(this.termino);
    })
   }


}
