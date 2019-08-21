import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {OneSignal} from '@ionic-native/onesignal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: string = "HomePage";


  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public oneSignal: OneSignal) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then((res) => {
      if (res == 'cordova') {
        this.oneSignal.startInit('6f0e3c2f-ff05-475a-a52b-96cb926cc851', '246832391722');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {
          // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        this.oneSignal.endInit();
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  home() {
    this.nav.push("HomePage");
  }

  layouts() {
    this.nav.push("LayoutsPage");
  }

  components() {
    this.nav.push("ComponentsPage");
  }

  functions() {
    this.nav.push("FunctionsPage");
  }
  login(){
    this.nav.push("LoginPage");
  }
  settings() {
    this.nav.push("SettingsPage");
  }
}
