import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItensPage } from '../pages/itens/itens';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { DoorPage } from '../pages/door/door';
import { LightsPage } from '../pages/lights/lights';
import { TVPage } from '../pages/tv/tv';
import { BaseController } from '../pages/base/base';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItensPage,
    AboutPage,
    LoginPage,
    BaseController,
    DoorPage,
    LightsPage,
    TVPage
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
    BaseController,
    DoorPage,
    LightsPage,
    TVPage
  ],
  providers: []
})
export class AppModule {}
