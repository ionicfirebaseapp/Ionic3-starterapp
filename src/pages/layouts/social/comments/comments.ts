import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SocialService} from '../social.service';


@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
  providers:[SocialService]
})
export class CommentsPage {
 public comments:any[]=[];
 public comntId:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public socialService:SocialService) {
    this.comntId = navParams.get('id');
    console.log("Id recived"+this.comntId);
    this.getCommentDetail();
  }
  getCommentDetail(){
    this.socialService.getSocialDetail()
    .then((response:any)=>{
      this.comments = response.comments;
    })
  }

  
}
