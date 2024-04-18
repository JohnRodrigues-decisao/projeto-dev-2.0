import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaPromissoriaComponent } from './nota-promissoria.component';
import { ButtonModule, InputModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    NotaPromissoriaComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    NotaPromissoriaComponent
  ]
})
export class NotaPromissoriaModule { }
