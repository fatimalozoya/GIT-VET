import { Component } from '@angular/core';



@Component({
  selector: 'app-ventas',
  templateUrl: 'ventas.page.html',
  styleUrls: ['ventas.page.scss'],
})
export class HomePage {

  Animales = [
    {
    audio: 'assets/perro.mp3',
    imagen: 'assets/perro.png',
    nombre: 'Perro',
    especie: 'canino',
    alimentacion: 'croquetas',
    ecosistema: 'domestico',
    peso: 'ligero',
    genero: 'macho',
    raza: 'Chihuahua',
    info: 'Mamifero que se caracteriza por su olfato, inteligencia y fidelidad'
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
    info: 'Mamífero felino de pelaje amarillo leonado con rayas oscuras.'
    },

    {
    audio: 'assets/sapo.mp3',
    imagen: 'assets/sapo.png',
    nombre: 'Sapo',
    especie: 'anfibio',
    alimentacion: 'insectos',
    ecosistema: 'pantano',
    peso: 'ligero',
    genero: 'macho',
    raza: 'Americano',
    info: 'Anfibio de cuerpo más grueso que la rana y con la piel sembrada de verrugas.'
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

