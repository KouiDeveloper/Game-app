
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { A001HeaderComponent } from './a001-header/a001-header.component';
import { NgxPopper } from 'angular-popper';
import { A000MainLayoutComponent } from './a000-main-layout/a000-main-layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { A002IndexComponent } from './a002-index/a002-index.component';
import { A003RandomComponent } from './a003-random/a003-random.component';
import { A004PopupTheWinnerComponent } from './a004-popup-the-winner/a004-popup-the-winner.component';
import { B005ProlistComponent } from './b005-prolist/b005-prolist.component';

@NgModule({
  declarations: [
    AppComponent,
    A001HeaderComponent,
    A000MainLayoutComponent,
    A002IndexComponent,
    A003RandomComponent,
    A004PopupTheWinnerComponent,
    B005ProlistComponent
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
