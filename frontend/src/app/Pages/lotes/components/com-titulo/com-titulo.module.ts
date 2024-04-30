import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComTituloComponent } from './com-titulo.component';
import { CheckboxModule, IconModule, InputModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    ComTituloComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    CheckboxModule,
    IconModule
  ],
  exports: [
    ComTituloComponent
  ]
})
export class ComTituloModule { }
