import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class NewsService {
	
	constructor(public http:HttpClient) { }

	getNewsDetail(){
	  return new Promise(resolve => {
		    this.http.get('assets/json/news.json').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
        });
	}

	

} 

