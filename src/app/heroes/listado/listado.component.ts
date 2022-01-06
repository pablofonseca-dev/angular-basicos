import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado : string = '';

  borrarHeroes = () => {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
