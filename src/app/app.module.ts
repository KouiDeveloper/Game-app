
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { A001HeaderComponent } from './a001-header/a001-header.component';
import { NgxPopper } from 'angular-popper';
import { A000MainLayoutComponent } from './a000-main-layout/a000-main-layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { A002IndexComponent } from './a002-index/a002-index.component';

@NgModule({
  declarations: [
    AppComponent,
    A001HeaderComponent,
    A000MainLayoutComponent,
    A002IndexComponent
  ],
  imports: [
    BrowserModule,
    NgxPopper,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
