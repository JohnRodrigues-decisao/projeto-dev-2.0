import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedLayoutRoutingModule } from './logged-layout-routing.module';
import { LoggedLayoutComponent } from './logged-layout.component';


@NgModule({
  declarations: [
    LoggedLayoutComponent
  ],
  imports: [
    CommonModule,
    LoggedLayoutRoutingModule
  ]
})
export class LoggedLayoutModule { }
