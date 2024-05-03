import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../Pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'create-account',
        loadChildren: () => import('../../Pages/create-account/create-account.module').then((m) => m.CreateAccountModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
