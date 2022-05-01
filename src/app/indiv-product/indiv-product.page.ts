import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService, Product } from '../cart-service.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

let selectedItem: Product;

@Component({
  selector: 'app-indiv-product',
  templateUrl: './indiv-product.page.html',
  styleUrls: ['./indiv-product.page.scss'],
})
export class IndivProductPage implements OnInit {

  @Input() activeItem: Product;

  cart: Product[] = [];
  products = [];
  cartItemCnt: BehaviorSubject<number>;

  constructor(private cartService: CartServiceService, private modalController: ModalController, private route: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.activeItem = this.inspectSelectedItem();
  }

  inspectSelectedItem(){ return this.cartService.checkSelectedItem();}
  // addToCart(product) { this.cartService.addProduct(product); }

  showToastMsg(product) {
    this.cartService.addProduct(product);
    this.toastController.create({
      message: `${product.name} added to cart!`,
      position: 'top',
      duration: 1000,
      color: 'light'
    }).then((toastRes) => {
      console.log(toastRes);
      toastRes.present();
    });
  }  

  async closeModal() {
    await this.modalController.dismiss();
    this.route.navigate(['products']);
  }

}