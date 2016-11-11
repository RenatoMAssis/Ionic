import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ItensPage } from '../itens/itens';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itens = ItensPage;

  constructor(public navCtrl: NavController) {

  }

  goToPage(page) {
    this.navCtrl.push(page);
  }
}
