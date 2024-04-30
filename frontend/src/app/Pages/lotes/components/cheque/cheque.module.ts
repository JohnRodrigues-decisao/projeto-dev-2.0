import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChequeComponent } from './cheque.component';
import { ButtonModule, InputModule } from '@decisaosistemas/angular-ds';



@NgModule({
  declarations: [
    ChequeComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule
  ],
  exports: [
    ChequeComponent
  ]
})
export class ChequeModule { }
