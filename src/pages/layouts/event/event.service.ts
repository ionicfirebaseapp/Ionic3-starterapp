import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class EventService {

	constructor(public http: HttpClient) { }

	getEventDetail() {
		return this.http.get('assets/json/event.json')
	}



}

