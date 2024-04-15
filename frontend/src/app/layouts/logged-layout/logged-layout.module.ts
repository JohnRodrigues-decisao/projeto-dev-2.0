import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedLayoutRoutingModule } from './logged-layout-routing.module';
import { LoggedLayoutComponent } from './logged-layout.component';

// Components
import { HeaderModule } from '../../Shared/components/header/header.module';
import { FooterModule } from '../../Shared/components/footer/footer.module';
import { NavigationModule } from '../../Shared/components/navigation/navigation.module';
import { LogoModule } from '../../Shared/components/logo/logo.module';


@NgModule({
  declarations: [
    LoggedLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    LoggedLayoutRoutingModule,
    LogoModule,
    HeaderModule,
    NavigationModule,
    FooterModule
  ]
})
export class LoggedLayoutModule { }
 