import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AppRatePage} from './app-rate';

@NgModule({
  declarations: [
    AppRatePage,
  ],
  imports: [
    IonicPageModule.forChild(AppRatePage),
  ],
  exports: [
    AppRatePage
  ]
})
export class AppRatePageModule {
}
