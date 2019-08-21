import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-ad-mob',
  templateUrl: 'ad-mob.html',
  providers: [AdMobFree]
})
export class AdMobPage {

  constructor(public navCtrl: NavController,
    public adMob: AdMobFree) {
  }

  showInterstitialAd() {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-3159551985458261/7017825030',
      isTesting: true,
      autoShow: true
    };
    this.adMob.interstitial.config(interstitialConfig);
    this.adMob.interstitial.prepare()
      .then(res => {
        console.log("admob prepared");
      }).catch(e => console.log(e));
  }

  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: 'ca-app-pub-3159551985458261/1691145037',
      isTesting: true,
      autoShow: true
    };
    this.adMob.banner.config(bannerConfig);
    this.adMob.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      }).catch(e => console.log(e));
  }

}
