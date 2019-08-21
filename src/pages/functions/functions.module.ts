import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunctionsPage } from './functions';

@NgModule({
  declarations: [
    FunctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(FunctionsPage),
  ],
  exports: [
    FunctionsPage
  ]
})
export class FunctionsPageModule {}
