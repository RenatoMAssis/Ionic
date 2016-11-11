import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItensPage } from '../pages/itens/itens';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItensPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItensPage
  ],
  providers: []
})
export class AppModule {}
