import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ListService} from '../list.service';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers:[ListService]
})
export class ListPage {
  
public listArray:any[]=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public listService:ListService) {
    this.getListDetail();
  }
  
  getListDetail(){
    this.listService.getListDetail()
    .then((response:any)=>{
      this.listArray = response.listdata;
    })
  }

  navListDetails(listId) {
    this.navCtrl.push("ListDetailsPage",{
      id:listId
    });
  }
}
