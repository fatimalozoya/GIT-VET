import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-reforestacion',
  templateUrl: './reforestacion.page.html',
  styleUrls: ['./reforestacion.page.scss'],
})



export class ReforestacionPage implements OnInit {

  constructor(public flash: Flashlight) { }

  switchFlash(evento){
  
    let power : boolean = evento.target.checked;
    if (power) {
      this.flash.switchOn()
    } else {
      this.flash.switchOff()
    }
  }

  


  ngOnInit() {
  }

}
