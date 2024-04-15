import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarLoteComponent } from './adicionar-lote.component';

const routes: Routes = [
  {
    path: '',
    component: AdicionarLoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarLoteRoutingModule { }
