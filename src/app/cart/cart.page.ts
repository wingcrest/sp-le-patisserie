import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartServiceService, Product } from '../cart-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartServiceService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
      this.cart = this.cartService.getCart();
      if(this.cart.length==0){
        this.alertController.create({
          header: 'Your cart is empty!',
          cssClass: 'alertHeader2',
          buttons: [
            {
              text: 'Back to Products',
              handler: () => {
                this.router.navigate(['products']);  
              }
            }
          ]
        }).then(res => {
          res.present();
        });
      }
  }
  // removeToCart(product) { this.cartService.removeProduct(product); }

  calculateSubtotal() { return this.cart.reduce((i, j) => i + j.price * j.amount, 0); }

  getTotal() {return this.calculateSubtotal() }

  showDeliveryFee(){return this.cartService.getDeliveryFee();}

  showConfirm(product) {
    this.alertController.create({
      header: 'Remove Item',
      message: `Are you sure you want to remove ${product.name}?`,
      cssClass: 'alertHeader',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.cartService.removeProduct(product);
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('no');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}