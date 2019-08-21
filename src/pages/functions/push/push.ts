import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushService } from './push.service';

@IonicPage()
@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
  providers: [PushService]
})
export class PushPage {
  message: any = {
    app_id: "6f0e3c2f-ff05-475a-a52b-96cb926cc851", //need to replace with your device's unique id dynamically
    contents: { "en": '' },
    headings: { "en": 'This is heading' },
    included_segments: ["All"]
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pushService: PushService) {
  }

  onSend() {
    if (this.message.contents != '') {
      this.pushService.sendNotification(this.message)
        .subscribe((response) => {
        });
    }
  }

}
