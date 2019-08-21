import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EcommerceService} from '../ecommerce.service';

@IonicPage()
@Component({
  selector: 'page-product-description',
  templateUrl: 'product-description.html',
   providers:[EcommerceService]
})
export class ProductDescriptionPage {
	public product;
	public productDesc:any={};
	public productReviewList:any[]=[];
	public id:any;

  constructor(public navCtrl: NavController,
  		      	public navParams: NavParams,
  		      	public ecommService:EcommerceService) {
  	this.product="detail";
  	this.id = navParams.get('id');
  	if(this.id!=null){
  		this.getProductDetail(this.id);
  	}
  }

  getProductDetail(id){
  	this.ecommService.getEcommerceDetail()
  		.subscribe((response:any) =>{
  			for(let i=0;i<=response.products.length-1;i++){
	        if(id == response.products[i].id){
	          this.productDesc =  response.products[i];        
	        }
      	}
      	this.productReviewList = response.review;
  		});
  	}

}
