import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private modalController: ModalController){
    this.presentSplash();
  }

  async presentSplash() {
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  activePageTitle = 'Dashboard';

  Pages = [
    {
      title: 'Products',
      url: '/products',
      icon: 'restaurant'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Company History',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'About Our Products',
      url: '/about-products',
      icon: 'pricetag'
    },
    {
      title: 'About the App',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Developers',
      url: '/developers',
      icon: 'people'
    },
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'call'
    }
    
  ];


}
