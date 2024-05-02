import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedLayoutComponent } from './logged-layout.component';
import { LotesComponent } from '../../Pages/lotes/lotes.component';
import { LotesModule } from '../../Pages/lotes/lotes.module';
import { AuthService } from '../../Shared/services/auth.service';

const routes: Routes = [ 
  {
    path: '',
    component: LoggedLayoutComponent,
    children: [
      {
        path: '',
        // canActivate: [AuthService],
        loadChildren: () => import('../../Pages/start/start.module').then((m) => m.StartModule),  
        canActivate: [AuthService],
      },
      {
        path: 'enviar-titulo',
        loadChildren: () => import('../../Pages/lotes/lotes.module').then((m) => m.LotesModule),
        canActivate: [AuthService],
      }
    ]
  },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
