import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarInicialComponent } from './adicionar-inicial.component';
import { ButtonModule, InputModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    AdicionarInicialComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    AdicionarInicialComponent
  ]
})
export class AdicionarInicialModule { }
