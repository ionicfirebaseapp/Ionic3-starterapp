import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LayoutsPage } from './layouts';

@NgModule({
  declarations: [
    LayoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(LayoutsPage),
  ],
  exports: [
    LayoutsPage
  ]
})
export class LayoutsPageModule {}
