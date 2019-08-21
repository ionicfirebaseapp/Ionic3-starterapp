import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-video-capture',
  templateUrl: 'video-capture.html',
  providers: [MediaCapture, Camera]
})
export class VideoCapturePage {

  @ViewChild('myvideo') myVideo: any;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public mediaCapture: MediaCapture,
    public camera: Camera) {
  }

  startrecording() {
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => alert(data),
      (err: CaptureError) => console.error(err)
    );
  }

  selectvideo() {
    this.platform.ready().then(res => {
      if (res == 'cordova') {
        let video = this.myVideo.nativeElement;
        var options = {
          sourceType: 2,
          mediaType: 1
        };
        this.camera.getPicture(options).then((data) => {
          video.src = data;
          video.play();
        })
      }
      else {
        console.log("Cordova is not available!");
      }
    })

  }
}
