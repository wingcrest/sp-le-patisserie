import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService} from '../cart-service.service';
import { ModalController } from '@ionic/angular';
import { IndivProductPage } from '../indiv-product/indiv-product.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  cart = [];
  products = [];
  cartItemCnt: BehaviorSubject<number>;
  
  constructor(private cartService: CartServiceService, private modalController: ModalController) { }
  
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
  
  addToCart(product) { this.cartService.addProduct(product); }

  // openProductPage(product) { this.cartService.getSelectedItem(product); console.log(product.name); }

  async openProductModal(product) {
    this.cartService.getSelectedItem(product);
    const modal = await this.modalController.create({
      component: IndivProductPage,
      cssClass: 'indiv-product.page'
    });
    return await modal.present();
  }
  
}
