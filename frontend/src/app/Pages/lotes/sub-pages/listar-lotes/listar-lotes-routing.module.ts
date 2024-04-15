import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLotesComponent } from './listar-lotes.component';

const routes: Routes = [
  {
    path: '',
    component: ListarLotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarLotesRoutingModule { }
