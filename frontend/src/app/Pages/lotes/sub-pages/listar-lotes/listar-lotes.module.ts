import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLotesRoutingModule } from './listar-lotes-routing.module';
import { ListarLotesComponent } from './listar-lotes.component';
import { ButtonDropdownModule, ButtonModule } from '@decisaosistemas/angular-ds';
import { ListaVaziaModule } from './components/lista-vazia/lista-vazia.module';
import { ListaTitulosModule } from './components/lista-titulos/lista-titulos.module';

@NgModule({
  declarations: [
    ListarLotesComponent,
  ],
  imports: [
    CommonModule,
    ListarLotesRoutingModule,
    ButtonModule,
    ButtonDropdownModule,
    ListaVaziaModule,
    ListaTitulosModule
  ],
})
export class ListarLotesModule { }
