import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ListService {
	
	constructor(public http:HttpClient) {	}

	getListDetail(){
		return new Promise(resolve => {
		    this.http.get('assets/json/list.json').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
        });
	}

	

} 

