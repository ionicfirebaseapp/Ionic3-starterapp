import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ListService} from '../list.service';

@IonicPage()
@Component({
  selector: 'page-list-details',
  templateUrl: 'list-details.html',
  providers:[ListService]
})
export class ListDetailsPage {

	public list:any={};
	private id:any;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public listService:ListService) {
  	this.id = navParams.get('id');
  	if(this.id!=null){
  		this.getListById(this.id);
  	}else{
  		console.log("Id Not found");
  	}
  }

  getListById(id){
  	this.listService.getListDetail()
  	.then((response:any)=>{
  		  for(let i=0;i<=response.listdata.length-1;i++){
          if(id == response.listdata[i].id){
            this.list =  response.listdata[i];
          }
        }
  	});
  }

}
