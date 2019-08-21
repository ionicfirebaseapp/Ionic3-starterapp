import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AboutService {

	constructor(public http: HttpClient) { }

	getAboutDetail() {
		return this.http.get('assets/json/about.json')

	}


}

