import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-in-app-browsser',
  templateUrl: 'in-app-browsser.html',
  providers: [InAppBrowser]
})
export class InAppBrowsserPage {

  constructor(public navCtrl: NavController,
              public inAppBrowser: InAppBrowser) {
  }

  openInAppBrowser() {
    const browser = this.inAppBrowser.create('https://ionicframework.com/');
    browser.executeScript(null);
    browser.insertCSS(null);
  }

}
