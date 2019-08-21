import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GalleryService} from '../gallery.service';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers:[GalleryService]
})
export class GalleryPage {

  listBtnVisible = false;
  gridBtnVisible = true;

  listViewVisble = true;
  gridViewVisble = false;

  
  public images:any[]=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public galleryService:GalleryService) {
    this.getGalleryDetail();
  }
  getGalleryDetail(){
    this.galleryService.getGalleryDetail()
    .then((response:any)=>{
      this.images = response.images;
      
    })
  }


  

  navFullGallery(imgId) {
    this.navCtrl.push("GalleryFullViewPage",{
      id:imgId
    });
  }

  btnToggle() {
    this.listBtnVisible = !this.listBtnVisible;
    this.gridBtnVisible = !this.gridBtnVisible;

    this.listViewVisble = !this.listViewVisble;
    this.gridViewVisble = !this.gridViewVisble;
  }
}
