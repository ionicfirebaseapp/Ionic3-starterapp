import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ECommerceHomePage } from './e-commerce-home';

@NgModule({
  declarations: [
    ECommerceHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ECommerceHomePage),
  ],
  exports: [
    ECommerceHomePage
  ]
})
export class ECommerceHomePageModule {}
