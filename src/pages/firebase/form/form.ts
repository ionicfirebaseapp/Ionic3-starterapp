import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  public userId: string;
  public user: any = {}
  public userInfo: any = {};
  public userRef: AngularFireObject<any>;
  public isUserInfoNull: boolean = false;
  private url: string;
  private isImage: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public afDb: AngularFireDatabase,
    private toastCtrl: ToastController) {
  }

  UploadImage(event) {
    //Show Image
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.isImage = true;
        this.saveImage();
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ionViewWillEnter() {
    this.userId = this.navParams.get('id');
    if (this.userId != null) {
      this.getUserDetail(this.userId);
      this.getUserInfo(this.userId);
    }
  }

  saveImage() {
    let that = this;
    let metadata = {
      contentType: 'image/*'
    };
    let storageRef = firebase.storage().ref();
    let file = (<HTMLInputElement>document.getElementById('inputFileId')).files[0];
    storageRef.child('users/' + file.name).put(file, metadata)
      .then(res => {
        storageRef.child('users/' + file.name).getDownloadURL()
          .then(function (url) {
            that.afDb.object('users' + '/' + that.userId).update({
              imageUrl: url
            }).then(() => {
              that.showToaster('Profile image updated!', 3000);
            }).catch(error => {
              this.showToaster(error.message, 3000);
            })
          });

      }).catch(error => {
        this.showToaster(error.message, 3000);
      });
  }

  getUserDetail(userId) {
    this.userRef = this.afDb.object('users/' + userId);
    this.userRef.valueChanges().subscribe((res: any) => {
      this.user = res;
    });
  }

  getUserInfo(userId) {
    this.userRef = this.afDb.object('userInfo/' + userId);
    this.userRef.valueChanges().subscribe((res: any) => {

      if (res != null) {
        this.userInfo = res;
        this.isUserInfoNull = false;
      } else {
        this.isUserInfoNull = true;
      }
    })
  }

  addForm() {
    this.navCtrl.push("AddFormPage");
  }

  deleteInfo() {
    this.afDb.object('userInfo/' + this.userId).remove().then(() => {
      this.userInfo = {};
      this.showToaster('User Info Deleted', 3000);
    }).catch(error => {
      this.showToaster(error.message, 3000);
    })
  }
  logout() {
    this.navCtrl.setRoot('HomePage');
  }
  showToaster(message, duration) {
    this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom'
    }).present();
  }
}
