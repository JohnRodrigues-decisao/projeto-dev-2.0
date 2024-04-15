import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { ButtonModule, CheckboxModule, InputModule } from '@decisaosistemas/angular-ds';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account.component';


@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    InputModule,
    ButtonModule,
    CheckboxModule,
    ReactiveFormsModule,
  ]
})
export class CreateAccountModule { }
