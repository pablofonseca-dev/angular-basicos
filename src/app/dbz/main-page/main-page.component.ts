import { Component, OnInit } from '@angular/core';
import IPersonaje from '../models/IPersonaje.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: []
})
export class MainPageComponent {
  personajes : IPersonaje[] = []

  nuevo : IPersonaje = {
    nombre: '',
    poder: 0
  }


  agregar = () => {
    if(this.nuevo.nombre.trim().length === 0){
      return; 
    }
    this.personajes = [...this.personajes, this.nuevo];

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
