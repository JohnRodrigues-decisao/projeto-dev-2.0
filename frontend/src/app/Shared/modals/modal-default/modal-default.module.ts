import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDefaultComponent } from './modal-default.component';
import { ButtonModule, InputModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    ModalDefaultComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule
  ]
})
export class ModalDefaultModule { }
