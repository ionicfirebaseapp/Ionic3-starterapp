import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {SocialService} from '../social.service';


@IonicPage()
@Component({
  selector: 'page-social-home',
  templateUrl: 'social-home.html',
  providers:[SocialService]
})
export class SocialHomePage {

  public socialList:any[]=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public socialService:SocialService) {
    this.getSocialData();
  }

 getSocialData(){
   this.socialService.getSocialDetail()
   .then((response:any)=>{
     this.socialList = response.social;
   });
 }

  navProfile(profId) {
    this.navCtrl.push("ProfilePage",{
      id:profId
    });
  }

  navComment(comId) {
    this.navCtrl.push("CommentsPage",{
      id:comId
    });
  }

}
