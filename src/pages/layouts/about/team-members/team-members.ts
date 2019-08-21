import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AboutService} from '../about.service';

@IonicPage()
@Component({
  selector: 'page-team-members',
  templateUrl: 'team-members.html',
  providers:[AboutService]
})
export class TeamMembersPage {

  public aboutList:any[]=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public aboutService:AboutService) {
      this.getAllAboutDetail();
  }

  getAllAboutDetail(){
    this.aboutService.getAboutDetail()
        .subscribe((response:any)=>{
            this.aboutList = response.team;
        });
  }
  
  navTeamFullView(memId) {
    this.navCtrl.push("TeamMemberFullViewPage",{
      id:memId
    });
  }

}
