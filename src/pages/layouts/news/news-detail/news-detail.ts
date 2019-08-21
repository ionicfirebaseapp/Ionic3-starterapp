import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';

import {NewsService} from '../news.service';

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
  providers:[SocialSharing,NewsService]
})
export class NewsDetailPage {
    bookmark:boolean=false;
    public newsId:any;
    public newsDetail:any={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
  	          public socialSharing:SocialSharing,
              public newsService:NewsService) {
    this.newsId = navParams.get('id');
    if(this.newsId!=null){
      this.getNewsDetailById(this.newsId);
    }else{
      console.log("Id Not Recived");
    }
  }

  getNewsDetailById(Id){
    this.newsService.getNewsDetail()
    .then((response:any)=>{
      for(let i=0;i<=response.news.length-1;i++){
        if(Id == response.news[i].id){
          this.newsDetail =  response.news[i];
        }
      }
    });
  }

  fbSharing() {
    this.socialSharing.shareViaFacebook("share News App with friends to get latest templates", null, null);
  }

  twitterSharing() {
    this.socialSharing.shareViaTwitter("share News App with friends to get latest templates", null, null);
  }

  googleSharing() {
    this.socialSharing.share("share News App with friends to get latest templates", null, null, null);
  }

  whatsAppSharing() {
    this.socialSharing.shareViaWhatsApp("share News App with friends to get latest templates", null, null);
  }

  addBookmark(){
      this.bookmark=true;
  }

  removeBookmark(){
    this.bookmark=false;
  }

}