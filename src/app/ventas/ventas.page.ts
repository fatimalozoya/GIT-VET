import { Component } from '@angular/core';



@Component({
  selector: 'app-ventas',
  templateUrl: 'ventas.page.html',
  styleUrls: ['ventas.page.scss'],
})
export class HomePage {

  Animales = [
    {
      audio: 'assets/gato.mp3',
      imagen: 'assets/gato.jpg',
      nombre: 'Gato',
      info: 'Felino que ronronea'
    },

    {
      audio: 'assets/hamster.mp3',
      imagen: 'assets/hamster.jpg',
      nombre: 'Hamster',
      info:  'Roedor que es adorable'
    },

    {
    audio: 'assets/perro.mp3',
    imagen: 'assets/perro.jpg',
    nombre: 'Perro',
    especie: 'canino',
    alimentacion: 'croquetas',
    ecosistema: 'domestico',
    peso: 'ligero',
    genero: 'macho',
    raza: 'Chihuahua',
    info: 'Mamifero amigo de Humano'
    },

    {
    audio: 'assets/tigre.mp3',
    imagen: 'assets/tigre.png',
    nombre: 'Tigre',
    especie: 'felino',
    alimentacion: 'carnivoro',
    ecosistema: 'selva',
    peso: 'pesado',
    genero: 'macho',
    raza: 'Bengala',
    info: 'Mamífero Felino grande'
    },

    {
    audio: 'assets/sapo.mp3',
    imagen: 'assets/sapo.jfif',
    nombre: 'Sapo',
    especie: 'anfibio',
    alimentacion: 'insectos',
    ecosistema: 'pantano',
    peso: 'ligero',
    genero: 'macho',
    raza: 'Americano',
    info: 'Anfibio con verrugas'
    },

    {
      audio: 'assets/cuyo.mp3',
      imagen: 'assets/cuyo.jpg',
      nombre: 'Cuyo',
      info: 'Roedor grande y tierno'
    }
  ];


  reproducirAnimal(animal) {
    console.log(animal);
    const sonido = new Audio();
    sonido.src = animal.audio;
    sonido.load();
    sonido.play();
  }
}



export class PopoverComponent {
  public ionicNamedColor = 'dark';
  constructor() {
  }
  public toggleNamedColor(): void {
    if (this.ionicNamedColor === 'dark') {
      this.ionicNamedColor = 'dark';
    } else {
      this.ionicNamedColor = 'dark';
    }
  }
}

