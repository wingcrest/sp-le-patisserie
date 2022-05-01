import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndivProductPage } from './indiv-product.page';

const routes: Routes = [
  {
    path: '',
    component: IndivProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndivProductPageRoutingModule {}
