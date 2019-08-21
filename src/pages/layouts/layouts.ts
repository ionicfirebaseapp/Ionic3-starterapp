import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-layouts',
  templateUrl: 'layouts.html',
})
export class LayoutsPage {

  constructor(public navCtrl: NavController) {}

  chart() {
    this.navCtrl.push("ChartPage")
  }

  navEcommerce() {
    this.navCtrl.push("ECommerceHomePage");
  }

  navAbout() {
    this.navCtrl.push("TeamMembersPage");
  }

  navGallary() {
    this.navCtrl.push("GalleryPage");
  }

  navNotification() {
    this.navCtrl.push("NotificationsPage");
  }

  navList() {
    this.navCtrl.push("ListPage");
  }

  navSocialHome() {
    this.navCtrl.push("SocialHomePage");
  }

  navEventPage() {
    this.navCtrl.push("EventPage");
  }

  newsHome() {
    this.navCtrl.push("NewsPage");
  }
}
