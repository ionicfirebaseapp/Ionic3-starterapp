import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NotificationService} from '../notification.service';


@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers:[NotificationService]
})
export class NotificationsPage {

  public notificationList:any[]=[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public notificationService:NotificationService) {
    this.getAllNotification();
  }

  getAllNotification(){
    this.notificationService.getNotificationDetail()
    .then((response:any)=>{
      this.notificationList = response.notifications;
    })
  }
  

  navNotificationDetails(notId) {
    this.navCtrl.push("NotificationsDetailsPage",{
      id:notId
    });
  }

}
