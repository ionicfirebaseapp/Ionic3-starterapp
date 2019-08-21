import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotificationService} from '../notification.service';

@IonicPage()
@Component({
  selector: 'page-notifications-details',
  templateUrl: 'notifications-details.html',
  providers:[NotificationService]
})
export class NotificationsDetailsPage {
	private id:any;
	public notification:any={};

  constructor(public navCtrl: NavController,
  			      public navParams: NavParams,
  			      public notificationService:NotificationService) {
  	this.id = navParams.get('id');
  	if(this.id !=null){
  		this.getDetailNotification(this.id);
  	}else{
  		console.log("Id not Found");
  	}
  }

  getDetailNotification(id){
  	this.notificationService.getNotificationDetail()
  	.then((response:any)=>{
  		for(let i=0;i<=response.notifications.length-1;i++){
        if(id == response.notifications[i].id){
          this.notification =  response.notifications[i];
        }
      }
  	});
  }
}
