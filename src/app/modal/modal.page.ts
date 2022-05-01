import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import{Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController:ModalController, private route: Router) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
    this.route.navigate(['products']);
  }

}
