import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDescriptionPage } from './product-description';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    ProductDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDescriptionPage),
    Ionic2RatingModule 
  ],
  exports: [
    ProductDescriptionPage
  ]
})
export class ProductDescriptionPageModule {}
