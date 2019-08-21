import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GalleryService} from '../gallery.service';

@IonicPage()
@Component({
  selector: 'page-gallery-full-view',
  templateUrl: 'gallery-full-view.html',
  providers:[GalleryService]
})
export class GalleryFullViewPage {

  public imageId:any;
  public imageData:any={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public galleryService:GalleryService) {
      this.imageId = navParams.get('id');
      if(this.imageId!=null){
        this.getImageById(this.imageId);
      }else{
        console.log("Id not Found");
      }
  }

  getImageById(id){
    this.galleryService.getGalleryDetail()
    .then((response:any)=>{
      for(let i=0;i<=response.images.length-1;i++){
          if(id == response.images[i].id){
            this.imageData =  response.images[i];
          }
        }  
    });
  }

}

  


