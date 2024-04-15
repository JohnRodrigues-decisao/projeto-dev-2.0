import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLotesRoutingModule } from './listar-lotes-routing.module';
import { ListarLotesComponent } from './listar-lotes.component';
import { ButtonDropdownModule, ButtonModule, DividerModule } from '@decisaosistemas/angular-ds';


@NgModule({
  declarations: [
    ListarLotesComponent
  ],
  imports: [
    CommonModule,
    ListarLotesRoutingModule,
    ButtonModule,
    ButtonDropdownModule,
    DividerModule
  ],
})
export class ListarLotesModule { }
