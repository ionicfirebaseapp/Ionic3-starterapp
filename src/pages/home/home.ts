import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from './home.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  homeList: any[] = [];
  sliderList: Array<any>;

  constructor(
    public navCtrl: NavController,
    public homeService: HomeService) {
    homeService.getHomeData().then((response: any) => {
      this.homeList = response.category;
      this.sliderList = response.slide;
    });
  }

  onClickItem(page: string) {
    if (page == 'Cloth') {
      this.navCtrl.push('ECommerceHomePage');
    } else if (page == 'News') {
      this.navCtrl.push('NewsPage')
    } else {
      this.navCtrl.push('LayoutsPage');
    }
  }

}
