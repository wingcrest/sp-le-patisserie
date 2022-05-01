import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndivProductPageRoutingModule } from './indiv-product-routing.module';

import { IndivProductPage } from './indiv-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndivProductPageRoutingModule
  ],
  declarations: [IndivProductPage]
})
export class IndivProductPageModule {}
