import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {EcommerceService} from '../ecommerce.service';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers:[EcommerceService]
})
export class ProductPage {

  productListData:any[]=[];
  public catid:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ecommService:EcommerceService) {
    this.catid = navParams.get('id');
    this.getProductList();
  }

  getProductList(){
    this.ecommService.getEcommerceDetail()
        .subscribe((response:any)=>{
            this.productListData = response.products;
    });
  }
 
  navDetails(itemId) {
    this.navCtrl.push("ProductDetailsPage",{
      id:itemId
    });
  }
}
