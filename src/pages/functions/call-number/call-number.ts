import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html',
  providers: [CallNumber]
})

export class CallNumberPage {
  phoneNumber: '';

  constructor(public call: CallNumber) {
  }

  async callNumber(): Promise<any> {
    try {
      await this.call.callNumber(this.phoneNumber, true)
    }
    catch (e) {
      console.log(e);
    }
  }

}
