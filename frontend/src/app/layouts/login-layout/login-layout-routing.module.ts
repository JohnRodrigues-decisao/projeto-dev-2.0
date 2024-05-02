import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { AuthService } from '../../Shared/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../Pages/login/login.module').then((m) => m.LoginModule),
        // canActivate: [AuthService],
      },
      {
        path: 'create-account',
        loadChildren: () => import('../../Pages/create-account/create-account.module').then((m) => m.CreateAccountModule),
        // canActivate: [AuthService],
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
