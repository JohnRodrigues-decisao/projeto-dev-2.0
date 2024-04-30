import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarLoteRoutingModule } from './adicionar-lote-routing.module';
import { AdicionarLoteComponent } from './adicionar-lote.component';
import { BadgeModule, ButtonModule, InputModule } from '@decisaosistemas/angular-ds';
import { AdicionarInicialModule } from '../components/adicionar-inicial/adicionar-inicial.module';
import { DuplicataModule } from '../components/duplicata/duplicata.module';
import { ChequeModule } from '../components/cheque/cheque.module';
import { NotaPromissoriaModule } from '../components/nota-promissoria/nota-promissoria.module';
import { SemTituloModule } from '../components/sem-titulo/sem-titulo.module';
import { ComTituloModule } from '../components/com-titulo/com-titulo.module';

@NgModule({
  declarations: [
    AdicionarLoteComponent,
  ],
  imports: [
    CommonModule,
    AdicionarLoteRoutingModule,
    BadgeModule,
    InputModule,
    AdicionarInicialModule,
    DuplicataModule,
    ChequeModule,
    NotaPromissoriaModule,
    SemTituloModule,
    ComTituloModule,
    InputModule,
    ButtonModule
  ]
})
export class AdicionarLoteModule { }
