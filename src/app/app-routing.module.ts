import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { A000MainLayoutComponent } from './a000-main-layout/a000-main-layout.component';
import { A002IndexComponent } from './a002-index/a002-index.component';

const routes: Routes = [
  { path: 'main-laout', component: A000MainLayoutComponent},
  { path: 'index', component: A002IndexComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
