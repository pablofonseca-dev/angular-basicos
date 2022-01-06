import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    ContadorComponent
  ],
  providers: [],
  bootstrap: [],
})
export class ContadorModule { }