import { Component, OnInit, Injectable } from '@angular/core';
import { Lugar } from 'src/app/models/Lugar';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-mapa-modal',
  templateUrl: './mapa-modal.page.html',
  styleUrls: ['./mapa-modal.page.scss'],
})
export class MapaModalPage implements OnInit {
  //foto: any;
  currentImage: any;

 
// public lugares: Lugar[] = [];
 lat: number;
 lon: number;
//  lugar = new Lugar;

  constructor(public geolocation: Geolocation,public photoService: PhotoService) {
    this.getGeolocation()
    
    
    /*this.lugar1 = {
      nombre: 'FCFM, UANL',
      lat: -40.7133,
     lng: -154.4246,
     urlImagen: ' ',
    descripcion: 'Punto de Reunión'

    };

    
    this.lugares.push(this.lugar1);
    */
  }
  // tslint:disable-next-line: no-trailing-whitespace
 
  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
      
    });
  }
  

  /*hacerFoto(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  */
 

 ngOnInit() {
  this.photoService.loadSaved();
}
}
