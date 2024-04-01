import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    pathMatch: 'full',
    component: CreateAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
