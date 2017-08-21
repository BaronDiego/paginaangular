import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {

  productos: any [] = [];
  productosFiltrados: any [] = [];
  cargando = true;

  constructor( public http: Http) {
    this.cargarProductos();
   }

  public cargarProductos (){
    this.cargando = true;

    const promesa = new Promise((resolve, reject) => {
      this.http.get('https://paginaweb-5ecd2.firebaseio.com/productos_idx.json').subscribe( res => {
        console.log( res.json());
        this.cargando = false;
        this.productos = res.json();
        resolve();
      });
    });
    return promesa;
  }

  public cargarProducto ( cod:string){
    return this.http.get( `https://paginaweb-5ecd2.firebaseio.com/productos/${cod}.json`);
  }

  public buscarProductos ( termino: string){
    console.log('Buscando productos');
    console.log(this.productos.length);
    if(this.productos.length === 0){
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);

      });
    }else{
      this.filtrarProductos(termino);
    }
      }
  private filtrarProductos ( terimino: string ) {
    this.productosFiltrados = [];
    terimino = terimino.toLowerCase();
    this.productos.forEach( prod => {
      if (prod.categoria.indexOf( terimino )>=0 || prod.titulo.toLowerCase().indexOf( terimino )>=0){
        this.productosFiltrados.push( prod );
      }
      console.log(prod);
    });}
}
