import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SocialService} from '../social.service';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[SocialService]
})
export class ProfilePage {
  public profile;//segment
  public profileImages:any[]=[];
  public post:any[]=[];
  public id:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public socialService:SocialService) {
    this.profile = "post";
    this.id = navParams.get('id');
    console.log("Id recived"+this.id);
    this.getProfileDetail();
  }

  getProfileDetail(){
    this.socialService.getSocialDetail()
    .then((response:any)=>{
      this.profileImages = response.profileImages;
      this.post = response.post;
     
    })
  }

}
