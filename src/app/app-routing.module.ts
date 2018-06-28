import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { A000MainLayoutComponent } from './a000-main-layout/a000-main-layout.component';

const routes: Routes = [
  { path: 'main-laout', component: A000MainLayoutComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
