import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {EcommerceService} from '../ecommerce.service';

@IonicPage()
@Component({
  selector: 'page-e-commerce-home',
  templateUrl: 'e-commerce-home.html',
  providers:[EcommerceService]
})
export class ECommerceHomePage {

  public slider:any[]=[];
  public category:any[]=[];
  
  constructor(public navCtrl: NavController,
              public ecommService:EcommerceService) {
    this.getEcommDetails();
  }

  getEcommDetails(){
    this.ecommService.getEcommerceDetail()
        .subscribe((response:any)=>{
            this.slider = response.productSlider;
            this.category = response.productCategory;
    });
  }

  navProduct(itemId) {
    this.navCtrl.push("ProductPage",{
       id:itemId
    });
  }

}
