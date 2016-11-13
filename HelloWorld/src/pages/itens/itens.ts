import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DoorPage } from '../door/door';
import { LightsPage } from '../lights/lights';
import { TVPage } from '../tv/tv';

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html'
})
export class ItensPage {
  itens: Array<{title: string, component: any, icon:string }>;
  
  constructor(public navCtrl: NavController) {
    this.itens = [
      { title: 'Door', component:DoorPage, icon: 'unlock'  },
      { title: 'Light', component:LightsPage, icon: 'sunny'  },
      { title: 'TV', component: TVPage , icon: 'power'}
    ];
  }

  goToPage(page) {
    this.navCtrl.push(page);
  }

}
