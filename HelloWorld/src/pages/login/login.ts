import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  private email: any;
  private password: any;
  constructor(public navCtrl: NavController) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      if(this.email == "renato@gmail.com" && this.password == "renato") {
          this.navCtrl.setRoot(HomePage);
      }

    }
  }

}
