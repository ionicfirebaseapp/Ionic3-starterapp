import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventService } from '../event.service';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
  providers: [EventService]
})
export class EventPage {
  public event: any;
  public events: any[] = [];
  public events_upcomming: any[] = [];

  constructor(public navCtrl: NavController,
    public eventService: EventService) {
    this.event = "today";
    this.getEventDetailData();
  }

  getEventDetailData() {
    this.eventService.getEventDetail()
      .subscribe((response: any) => {
        this.events = response.event;
        this.events_upcomming = response.events_upcomming;
      });
  }

  navEventDetail(itemId) {
    this.navCtrl.push("EventDetailsPage", {
      id: itemId
    });
  }

}