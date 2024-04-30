import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDropdownModule, ButtonModule, DividerModule } from '@decisaosistemas/angular-ds';
import { ListaTitulosComponent } from './lista-titulos.component';

@NgModule({
  declarations: [
    ListaTitulosComponent
  ],
  imports: [
    CommonModule,
    ButtonDropdownModule,
    ButtonModule,
    DividerModule
  ],
  exports: [
    ListaTitulosComponent
  ]
})

export class ListaTitulosModule { }
