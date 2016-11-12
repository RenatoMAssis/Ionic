import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component ({
  templateUrl: 'base.html'
})
export class BaseController {
  constructor(public alertCtrl: AlertController) {

  }
 showAlert(title, message, buttons) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: buttons
    });
    alert.present();
  }
}
