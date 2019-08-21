import { Injectable } from '@angular/core';
//import {Http, Response, Headers} from "@angular/http";
//import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PushService {

  url: any = 'https://onesignal.com/api/v1/notifications';

  constructor(private http: HttpClient) {
  }

  sendNotification(message) {
    const body = JSON.stringify(message);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Basic OTdjYzM2ZTMtMTAzNC00YTVjLWEzNDUtYTRlNjIwMmYzZTQy');
    return this.http.post(this.url, body, {
      headers: headers
    });
  }
}
