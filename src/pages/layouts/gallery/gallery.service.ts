import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GalleryService {
	
	constructor(public http:HttpClient) {	}

	getGalleryDetail(){
			return new Promise(resolve => {
		    this.http.get('assets/json/gallery.json').subscribe(data => {
		      resolve(data);
		    }, err => {
		      console.log(err);
		    });
        });
	}

} 

