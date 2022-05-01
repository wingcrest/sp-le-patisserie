import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartServiceService, Product } from '../cart-service.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  cart: Product[] = [];
  constructor(private cartService: CartServiceService, private modalController: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
}
 calculateSubtotal() { return this.cart.reduce((i, j) => i + j.price * j.amount, 0); }

  getTotal() {return this.calculateSubtotal() + this.cartService.getDeliveryFee(); }

  showDeliveryFee(){return this.cartService.getDeliveryFee();}

  async openCheckoutModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal.page'
    });
    return await modal.present();
  }
  
}
