import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {

  productos: any [] = [];
  cargando: boolean = true;

  constructor( public http: Http) {
    this.cargarProductos();
   }

  public cargarProductos (){
    this.cargando = true;
    this.http.get('https://paginaweb-5ecd2.firebaseio.com/productos_idx.json').subscribe( res=>{
      console.log( res.json());
      this.cargando = false;
    });
  }

}
