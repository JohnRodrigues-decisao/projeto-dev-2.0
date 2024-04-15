import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarLoteRoutingModule } from './adicionar-lote-routing.module';
import { AdicionarLoteComponent } from './adicionar-lote.component';
import { BadgeModule, ButtonModule, InputModule } from '@decisaosistemas/angular-ds';


@NgModule({
  declarations: [
    AdicionarLoteComponent
  ],
  imports: [
    CommonModule,
    AdicionarLoteRoutingModule,
    BadgeModule,
    InputModule,
    ButtonModule
  ]
})
export class AdicionarLoteModule { }
