import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    ProductDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
    Ionic2RatingModule 
  ],
  exports: [
    ProductDetailsPage
  ]
})
export class ProductDetailsPageModule {}
