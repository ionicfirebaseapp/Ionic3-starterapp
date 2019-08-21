import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  tagHide1: boolean = true;
  openCard: boolean = true;
  addressToggle: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) { }

  toggle2() {
    this.openCard = this.openCard ? false : true;
  }

  hide() {
    this.openCard = true;
  }

  addressToggler() {
    this.addressToggle = !this.addressToggle;
  }

}
