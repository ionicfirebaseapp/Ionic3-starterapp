import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventService} from '../event.service';


@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
  providers:[EventService]
})
export class EventDetailsPage {
  lat: number = 12.9719;
  lng: number = 77.6412;
  private id:any;
  detailEvent:any[]=[];
  dispalyDetail:any={};

  constructor(public navCtrl: NavController,
  			public navParams: NavParams,
  			public eventService:EventService) {
  	this.id = navParams.get('id');
  	if(this.id!=null){
  		this.getEventDetailById(this.id);
  	}else{
  		console.log("Id Not Passed");
  	}
  }

  getEventDetailById(id){
  	this.eventService.getEventDetail()
  	.subscribe((response:any)=>{
  		this.detailEvent = response;
  		let length;
  		let lengthEveUp = response.events_upcomming.length ;
  		let lengthEnen = response.event.length;
  		if(lengthEveUp>lengthEnen){
  			length = lengthEveUp;
  		}else{
  			length = lengthEnen;
  		}
  		for(let i = 0;i<=length-1;i++){
  			if(this.id == response.events_upcomming[i].id){
  				this.dispalyDetail = response.events_upcomming[i];
  				console.log("Dispaly In Upcoming Data"+JSON.stringify(this.dispalyDetail));
  				break;
  			}else if(this.id == response.event[i].id){
  				this.dispalyDetail = response.event[i];
  				console.log("Dispaly In Event Data"+JSON.stringify(this.dispalyDetail));
  				break;
  			}
  		}

  	})
  }

  

}
