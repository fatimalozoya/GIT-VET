import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {
  public form = [
    { val: 'Adopté un Perro/Gato', isChecked: true },
    { val: 'Hice voluntariado en VET UNI', isChecked: false },
    { val: 'Encontré un Perro/Gato', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
