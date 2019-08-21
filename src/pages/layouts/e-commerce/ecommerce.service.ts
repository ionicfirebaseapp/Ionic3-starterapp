import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EcommerceService {

	constructor(public http: HttpClient) { }

	getEcommerceDetail() {
		return this.http.get('assets/json/ecommerce.json')
	}

}

