import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { IconModule } from '@decisaosistemas/angular-ds';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
