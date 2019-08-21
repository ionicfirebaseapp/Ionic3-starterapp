import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
  providers: [BarcodeScanner]
})
export class BarcodeScannerPage {
  barcodeData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private barcodeScanner: BarcodeScanner) {
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.barcodeData = barcodeData;
    }, (err) => {
      console.log("err-" + JSON.stringify(err));
    });
  }

}
