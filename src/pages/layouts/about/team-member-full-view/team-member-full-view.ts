import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutService } from '../about.service';

@IonicPage()
@Component({
  selector: 'page-team-member-full-view',
  templateUrl: 'team-member-full-view.html',
    providers:[AboutService]
})
export class TeamMemberFullViewPage {

  public teamMember:any={};
  public memId:any;

  constructor(
    public navCtrl: NavController,
  	public navParams: NavParams,
    public aboutService:AboutService) {
  	  this.memId = navParams.get('id');
  	  if(this.memId !=null){
  		  this.getMemberDetail(this.memId);
  	  }else{
  		  console.log("Id not Found");
  	  }
  }

  getMemberDetail(id){
  	this.aboutService.getAboutDetail()
  	    .subscribe((response:any)=>{
  		        for(let i=0;i<=response.team.length-1;i++){
                if(id == response.team[i].id){
                  this.teamMember =  response.team[i];
                }
              }
  	    });
  }

}
