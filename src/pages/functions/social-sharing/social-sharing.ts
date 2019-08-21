import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-social-sharing',
  templateUrl: 'social-sharing.html',
  providers: [SocialSharing]
})
export class SocialSharingPage {

  constructor(public socialSharing: SocialSharing) {
  }

  fbSharing() {

    this.socialSharing.shareViaFacebook("Ionic Starter App", null, "https://play.google.com/store/apps/details?id=io.ionic.ionicfirebaseappstarter");
  }

  twitterSharing() {

    this.socialSharing.shareViaTwitter("Ionic Starter App", null, "https://play.google.com/store/apps/details?id=io.ionic.ionicfirebaseappstarter");
  }

  googleSharing() {

    this.socialSharing.share("Ionic Starter App", null, null, "https://play.google.com/store/apps/details?id=io.ionic.ionicfirebaseappstarter");
  }

  whatsAppSharing() {

    this.socialSharing.shareViaWhatsApp("Ionic Starter App", null, "https://play.google.com/store/apps/details?id=io.ionic.ionicfirebaseappstarter");
  }

}
