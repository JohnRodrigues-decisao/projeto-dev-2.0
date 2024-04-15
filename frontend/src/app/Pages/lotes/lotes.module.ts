import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotesRoutingModule } from './lotes-routing.module';
import { LotesComponent } from './lotes.component';

import { ButtonModule } from '@decisaosistemas/angular-ds';

@NgModule({
  declarations: [
    LotesComponent
  ],
  imports: [
    CommonModule,
    LotesRoutingModule,
    ButtonModule
  ],
})
export class LotesModule { }
