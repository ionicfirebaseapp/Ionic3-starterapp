import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EcommerceService } from '../ecommerce.service';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
  providers: [EcommerceService]
})
export class ProductDetailsPage {

  public id: any;
  public productItem: any = {}
  public productCounter: number = 1;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ecommService: EcommerceService) {
    this.id = navParams.get('id');
    if (this.id != null) {
      this.getDetailProduct(this.id);
    } else {
      console.log("Id Not Found");
    }
  }

  incrementOne() {
    if (this.productCounter < 15) {
      this.productCounter++;
    }
  }

  decrementOne() {
    if (this.productCounter > 1) {
      this.productCounter--;
    }
  }

  getDetailProduct(id) {
    this.ecommService.getEcommerceDetail()
      .subscribe((response: any) => {
        console.log("detail product--", JSON.stringify(response));
        for (let i = 0; i <= response.products.length - 1; i++) {
          if (id == response.products[i].id) {
            this.productItem = response.products[i];
          }
        }
      });
  }

  navDescription(itemId) {
    this.navCtrl.push("ProductDescriptionPage", {
      id: itemId
    });
  }

  navCheckout() {
    this.navCtrl.push("CheckoutPage");
  }

}
