import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './Shared/services/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./layouts/login-layout/login-layout.module').then((m) => m.LoginLayoutModule)
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () => import('./layouts/logged-layout/logged-layout.module').then((m) => m.LoggedLayoutModule),
    canActivate: [AuthService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
