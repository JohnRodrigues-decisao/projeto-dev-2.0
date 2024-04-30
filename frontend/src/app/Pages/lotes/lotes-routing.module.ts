import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LotesComponent } from './lotes.component';

const routes: Routes = [
  {
    path: '',
    component: LotesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./listar-lotes/listar-lotes.module').then((m) => m.ListarLotesModule),
      },
      {
        path: 'adicionar-titulo',
        loadChildren: () => import('./adicionar-lote/adicionar-lote.module').then((m) => m.AdicionarLoteModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotesRoutingModule { }
