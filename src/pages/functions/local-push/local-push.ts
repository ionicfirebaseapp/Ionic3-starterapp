import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-local-push',
  templateUrl: 'local-push.html',
  providers: [LocalNotifications]
})
export class LocalPushPage {
  message: ''

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private localNotifications: LocalNotifications) {
  }


  onSend() {
    this.localNotifications.schedule([{
      id: 1,
      title: 'Text you just entered',
      text: this.message,
      icon: 'assets/images/profile.png'
    }]);
    this.message = '';
  }

}
