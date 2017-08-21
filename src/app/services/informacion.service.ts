import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class InformacionService {

  info: any= {};
  cargada: boolean = false;
  cargadaSobreNosotrso: boolean = false;
  equipo: any []=[];

  constructor( public http: Http) {
    this.cargaInfo();
    this.sobreCargaNosotros();

   }

   public cargaInfo(){
    this.http.get('assets/data/info.pagina.json').subscribe( data => {
      this.info = data.json();
      this.cargada = true;
    })
   }

   public sobreCargaNosotros(){
    this.http.get('https://paginaweb-5ecd2.firebaseio.com/equipo.json').subscribe( data => {
      this.equipo = data.json();
      this.cargadaSobreNosotrso = true;
    })
   }

}
