import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryFullViewPage } from './gallery-full-view';

// import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    GalleryFullViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryFullViewPage),
    //IonicImageViewerModule
  ],
  exports: [
    GalleryFullViewPage
  ]
})
export class GalleryFullViewPageModule {}
