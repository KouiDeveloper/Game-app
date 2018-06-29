import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { A000MainLayoutComponent } from './a000-main-layout/a000-main-layout.component';
import { A002IndexComponent } from './a002-index/a002-index.component';
import { A003RandomComponent } from './a003-random/a003-random.component';
import { A004PopupTheWinnerComponent } from './a004-popup-the-winner/a004-popup-the-winner.component';
import { B005ProlistComponent } from './b005-prolist/b005-prolist.component';
import { B006AdminComponent } from './b006-admin/b006-admin.component';
import { C001PromotionListComponent } from './b006-admin/c001-promotion-list/c001-promotion-list.component';
import { C002ProlistComponent } from './b006-admin/c002-prolist/c002-prolist.component';
import { C003ClientListComponent } from './b006-admin/c003-client-list/c003-client-list.component';

const routes: Routes = [
  { path: 'main-laout', component: A000MainLayoutComponent},
  { path: 'index', component: A002IndexComponent},
  { path: 'ran-dom', component: A003RandomComponent},
  { path: 'winner', component: A004PopupTheWinnerComponent},
  { path: 'promotion', component:B005ProlistComponent},
  { path:'admin-control', component: B006AdminComponent},
  { path: 'promotion-list', component:C001PromotionListComponent},
  { path: 'pro-list', component:C002ProlistComponent},
  { path: 'client-list', component:C003ClientListComponent}
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
