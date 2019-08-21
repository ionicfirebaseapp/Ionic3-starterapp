import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HomeService  {
	
	      constructor(public http:HttpClient) {	}

	getHomeData() { //Get All Home Data
		return new Promise(resolve => {
		    this.http.get('assets/json/home.json').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
        });
		
	}

}