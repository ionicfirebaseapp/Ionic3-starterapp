import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {EmailComposer} from '@ionic-native/email-composer';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [EmailComposer, Camera]
})

export class ContactPage {
  user: any = {};
  currentImage = null;

  constructor(public navCtrl: NavController,
              public camera: Camera,
              public emailComposer: EmailComposer) {
  }

  attachImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      ;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });

  }

  onSend() {
    console.log("user " + JSON.stringify(this.user));
    let email = {
      to: 'san10694@gmail.com',
      subject: this.user.name,
      body: this.user.message,
      attachments: [
        this.currentImage
      ],
      isHtml: true
    };
    this.emailComposer.open(email, function (callback) {
      console.log('email view dismissed' + callback);
    });
    this.user = '';


  }

}
