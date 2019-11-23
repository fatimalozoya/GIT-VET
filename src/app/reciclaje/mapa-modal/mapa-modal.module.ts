import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaModalPage } from './mapa-modal.page';
import { Geolocation} from '@ionic-native/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

const routes: Routes = [
  { 
    path: '',
    component: MapaModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Geolocation,
  ],
  declarations: [MapaModalPage]
})
export class MapaModalPageModule {}
