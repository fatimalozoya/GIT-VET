import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
{
  title: 'Inicio',
  url: '/home',
  icon: 'home'
},
  {
    title: 'Alumbra tu mascota',
    url: '/reforestacion',
    icon: 'flashlight'
  },
  {
    title: 'Galería de Animales',
    url: '/ventas',
    icon: 'ios-images'
  },
  {
    title: 'Adopta un Perro',
    url: '/donaciones',
    icon: 'md-paw'
  },
  {
    title: 'Actividades',
    url: '/metas',
    icon: 'md-checkmark-circle'
  },
  {
    title: 'Encontré un perro',
    url: '/reciclaje',
    icon: 'ios-pin'
  }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
