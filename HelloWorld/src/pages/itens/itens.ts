import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html'
})
export class ItensPage {
  itens: Array<{title: string, component: any, icon:string }>;

  constructor(public navCtrl: NavController) {
    this.itens = [
      { title: 'Door', component:'', icon: 'unlock'  },
      { title: 'Light', component:'', icon: 'sunny'  },
      { title: 'TV', component: '' , icon: 'power'}
    ];
  }

}
