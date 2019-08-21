import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import {NewsService} from '../news.service';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers:[SocialSharing,NewsService]
})
export class NewsPage {

  public newsList:any[]=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public socialSharing:SocialSharing,
              public newsService:NewsService) {
    this.getAllDetailNews();
  }

  getAllDetailNews(){
    this.newsService.getNewsDetail().
    then((response:any)=>{
      this.newsList = response.news;
    });
  }
 
  newsDetail(newsId) {
    this.navCtrl.push("NewsDetailPage",{
      id:newsId
    });
  }

  share(){
     this.socialSharing.share("share News App with friends to get latest templates", null, null, 'https://ionicstarter.com/#/');
  }
}
