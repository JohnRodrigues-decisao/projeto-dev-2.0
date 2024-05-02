import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account.component';
import { AuthService } from '../../Shared/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountComponent,
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateAccountRoutingModule { }
