import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushPage } from './push';

@NgModule({
  declarations: [
    PushPage,
  ],
  imports: [
    IonicPageModule.forChild(PushPage),
  ],
  exports: [
    PushPage
  ]
})
export class PushPageModule {}
