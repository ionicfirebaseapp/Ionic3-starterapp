import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, CaptureImageOptions, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
  providers: [Camera, MediaCapture]
})
export class CameraPage {

  @ViewChild('myImage') myImage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mediaCapture: MediaCapture,
    public camera: Camera) {
  }


  openCamera() {
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureImage(options).then(
      (data: MediaFile[]) => alert(data),
      (err: CaptureError) => console.error(err)
    );
  }

  selectPicture() {
    let image = this.myImage.nativeElement;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 2

    }

    this.camera.getPicture(options).then((imageData) => {


      image.src = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
  }

}
