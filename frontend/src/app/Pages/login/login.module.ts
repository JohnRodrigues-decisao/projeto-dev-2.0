import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ButtonModule, CheckboxComponent, CheckboxModule, InputModule } from '@decisaosistemas/angular-ds';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    CheckboxModule
  ]
})
export class LoginModule { }
