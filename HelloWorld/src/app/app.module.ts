import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItensPage } from '../pages/itens/itens';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { BaseController } from '../pages/base/base';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItensPage,
    AboutPage,
    LoginPage,
    BaseController
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItensPage,
    AboutPage,
    LoginPage,
    BaseController
  ],
  providers: []
})
export class AppModule {}
