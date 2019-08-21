import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {AppRate} from '@ionic-native/app-rate';

@IonicPage()
@Component({
  selector: 'page-app-rate',
  templateUrl: 'app-rate.html',
  providers: [AppRate]
})
export class AppRatePage {

  constructor(public appRate: AppRate) {
  }


  rateApp() {
    this.appRate.preferences = {
      storeAppURL: {
        //ios: '849930087',
        android: 'market://details?id=io.ionic.starter'
      },
      displayAppName: 'Ionic-Starter App',
      usesUntilPrompt: 1,
      customLocale: {
        title: "Rate %@",
        message: "If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
        cancelButtonLabel: "No, Thanks",
        laterButtonLabel: "Remind Me Later",
        rateButtonLabel: "Rate It Now"
      },
      promptAgainForEachNewVersion: true,
      callbacks: {
        onRateDialogShow: function (callback) {
        },
        onButtonClicked: function (buttonIndex) {
        }
      }
    }
    this.appRate.promptForRating(true);
  }

}
