import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sayfa1Component } from './sayfa1/sayfa1.component';
import {FormsModule} from '@angular/forms';
import { BootComponent } from './boot/boot.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { KullaniciListComponent } from './kullanici-list/kullanici-list.component';
import { KullaniciEkleComponent } from './kullanici-ekle/kullanici-ekle.component';


@NgModule({
  declarations: [
    AppComponent,
    Sayfa1Component,
    BootComponent,
    NavbarComponent,
    KullaniciListComponent,
    KullaniciEkleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
