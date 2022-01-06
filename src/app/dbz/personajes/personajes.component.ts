import { Component, Input } from '@angular/core';
import IPersonaje from '../models/IPersonaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: []
})
export class PersonajesComponent {

  @Input('personajesData') personajes: IPersonaje[] = [];
}