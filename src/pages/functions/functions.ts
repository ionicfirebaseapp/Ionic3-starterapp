import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-functions',
  templateUrl: 'functions.html',
})
export class FunctionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  facebookLogin() {
    this.navCtrl.push("FacebookLoginPage");
  }

  googleLogin() {
    this.navCtrl.push("GoogleLoginPage");
  }

  twitterLogin() {
    this.navCtrl.push("TwitterLoginPage");
  }

  map() {
    this.navCtrl.push("MapPage")
  }

  contact() {
    this.navCtrl.push("ContactPage")
  }

  localPush() {
    this.navCtrl.push("LocalPushPage")
  }

  videoCapture() {
    this.navCtrl.push("VideoCapturePage");
  }

  adMob() {
    this.navCtrl.push("AdMobPage");
  }

  barcodeScanner() {
    this.navCtrl.push("BarcodeScannerPage");
  }

  inAppBrowser() {
    this.navCtrl.push("InAppBrowsserPage");
  }

  callNumber() {
    this.navCtrl.push("CallNumberPage");
  }

  camera() {
    this.navCtrl.push("CameraPage");
  }

  appRate() {
    this.navCtrl.push("AppRatePage");
  }

  socialShare() {
    this.navCtrl.push("SocialSharingPage");
  }

  push() {
    this.navCtrl.push("PushPage");
  }

}
