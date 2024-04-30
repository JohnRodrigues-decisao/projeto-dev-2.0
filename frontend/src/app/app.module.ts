import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedLayoutModule } from './layouts/logged-layout/logged-layout.module';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { ToasterControllerModule } from './Shared/components/toaster-controller/toaster-controller.module';
import { ModalFiltroComponent } from './Shared/modal/modal-filtro/modal-filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalFiltroComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoginLayoutModule,
    LoggedLayoutModule,
    ToasterControllerModule,
  ],  
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

