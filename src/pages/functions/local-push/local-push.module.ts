import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalPushPage } from './local-push';

@NgModule({
  declarations: [
    LocalPushPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalPushPage),
  ],
  exports: [
    LocalPushPage
  ]
})
export class LocalPushPageModule {}
