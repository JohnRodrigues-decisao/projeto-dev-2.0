import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { SideNavModule } from '@decisaosistemas/angular-ds';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SideNavModule,
    
  ],
  exports: [
    NavigationComponent
  ]
})

export class NavigationModule { }
