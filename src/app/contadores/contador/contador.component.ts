import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Mundo</h1>

    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>
    <button (click)="add(base)">+ {{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="subtract(base)">- {{ base }}</button>
  `,
})

export class ContadorComponent {
    title: string = 'bases';
    number: number = 10;
    base: number = 5;
    
    add = (accumulator: number = 1) => this.number += accumulator;
  
    subtract = (accumulator: number = 1) => this.number -= accumulator;
}
