import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginModule } from '../../Pages/login/login.module';
import { CreateAccountModule } from '../../Pages/create-account/create-account.module';

// import { ButtonModule, CheckboxModule, InputModule } from '@decisaosistemas/angular-ds';
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginLayoutComponent,
  ],
  imports: [
    CommonModule,
    LoginLayoutRoutingModule,
    
    // InputModule,
    // ButtonModule,
    // CheckboxModule,
    // ReactiveFormsModule,
  ]
})
export class LoginLayoutModule { }
