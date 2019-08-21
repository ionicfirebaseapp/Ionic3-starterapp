import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NotificationService {
	
	constructor(public http:HttpClient){}

	getNotificationDetail(){
		return new Promise(resolve => {
		    this.http.get('assets/json/notification.json').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
        });
	}

} 

