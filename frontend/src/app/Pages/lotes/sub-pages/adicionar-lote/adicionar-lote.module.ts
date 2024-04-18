import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarLoteRoutingModule } from './adicionar-lote-routing.module';
import { AdicionarLoteComponent } from './adicionar-lote.component';
import { BadgeModule, InputModule } from '@decisaosistemas/angular-ds';
import { SemTituloComponent } from './components/sem-titulo/sem-titulo.component';
import { ComTituloComponent } from './components/com-titulo/com-titulo.component';
import { AdicionarInicialModule } from './components/adicionar-inicial/adicionar-inicial.module';
import { DuplicataModule } from './components/duplicata/duplicata.module';
import { ChequeModule } from './components/cheque/cheque.module';
import { NotaPromissoriaModule } from './components/nota-promissoria/nota-promissoria.module';

@NgModule({
  declarations: [
    AdicionarLoteComponent,
    SemTituloComponent,
    ComTituloComponent
  ],
  imports: [
    CommonModule,
    AdicionarLoteRoutingModule,
    BadgeModule,
    InputModule,
    AdicionarInicialModule,
    DuplicataModule,
    ChequeModule,
    NotaPromissoriaModule
    
  ]
})
export class AdicionarLoteModule { }
