import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { BaseController } from '../base/base';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html',
  providers: [BaseController]
})
export class LoginPage {
  private email: any;
  private password: any;
  private loader: any;
  constructor(public navCtrl: NavController, public baseCtrl: BaseController, public loadingCtrl: LoadingController) {

  }

  onSubmit() {
    this.presentLoading();
      if(this.email.toUpperCase().trim() == "renato@gmail.com".toUpperCase() && this.password == "renato") {
          this.navCtrl.setRoot(HomePage);
      } else {
        this.baseCtrl.showAlert('Login Inválido', 'Email e/ou senha incorretos!', ['Ok']);
      }
  }

  presentLoading() {
      this.loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      this.loader.present();
      
  }

}
