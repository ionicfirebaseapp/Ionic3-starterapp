import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallNumberPage } from './call-number';

@NgModule({
  declarations: [
    CallNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(CallNumberPage),
  ],
  exports: [
    CallNumberPage
  ]
})
export class CallNumberPageModule {}
