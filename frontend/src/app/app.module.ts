import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedLayoutModule } from './layouts/logged-layout/logged-layout.module';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginLayoutModule,
    LoggedLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
