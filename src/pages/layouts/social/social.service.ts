import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SocialService {
	
	constructor(public http:HttpClient) {	}

	getSocialDetail(){
		return new Promise(resolve => {
		    this.http.get('assets/json/social.json').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
        });
	}


} 

