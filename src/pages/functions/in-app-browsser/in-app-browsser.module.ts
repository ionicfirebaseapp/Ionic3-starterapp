import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowsserPage } from './in-app-browsser';

@NgModule({
  declarations: [
    InAppBrowsserPage,
  ],
  imports: [
    IonicPageModule.forChild(InAppBrowsserPage),
  ],
  exports: [
    InAppBrowsserPage
  ]
})
export class InAppBrowsserPageModule {}
