import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from '../contadores/contadores.module';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ContadorModule
  ],
  exports: [
    ListadoComponent
  ],
  providers: [],
  bootstrap: [],
})
export class HeroesModule { }