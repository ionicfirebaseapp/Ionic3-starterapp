import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'

})
export class RegistrationPage {
  registration: FormGroup;
  public isImage: boolean;
  public url = "assets/images/profile.png";

  constructor(public afDB: AngularFireDatabase,
    public afs: AngularFireAuth, public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  onSubmit() {
    if (this.registration.value.password != undefined && this.registration.value.email != undefined && this.registration.value.password.length > 5 && this.registration.value.email.indexOf('@') != -1) {
      this.afs.auth.createUserWithEmailAndPassword(this.registration.value.email, this.registration.value.password)
        .then((success: any) => {
          let metadata = {
            contentType: 'image/*'
          };
          let that = this;
          if (that.isImage) {
            let storageRef = firebase.storage().ref();
            let file = (<HTMLInputElement>document.getElementById('inputFileId')).files[0];
            storageRef.child('users/' + file.name).put(file, metadata)
              .then(res => {
                storageRef.child('users/' + file.name).getDownloadURL()
                  .then(function (url) {
                    that.afDB.object('users' + '/' + success.uid).update({
                      email: that.registration.value.email,
                      name: that.registration.value.name,
                      imageUrl: url
                    }).then(() => {
                      that.showToaster('Register Successfully!', 3000);
                      that.navCtrl.push('FormPage', {
                        id: success.uid
                      });
                    }).catch(error => {
                      this.showToaster(error.message, 3000);
                    })
                  });

              }).catch(error => {
                this.showToaster(error.message, 3000);
              })
          } else {
            that.afDB.object('users' + '/' + success.uid).update({
              email: that.registration.value.email,
              name: that.registration.value.name,
            }).then(() => {
              that.showToaster('Register Successfully!', 3000);
              that.navCtrl.push('FormPage', {
                id: success.uid
              });
            }).catch(error => {
              this.showToaster(error.message, 3000);
            })
          }
        }).catch(error => {
          this.showToaster(error.message, 3000);
        })
    } else {
      this.showToaster('Email or password is not valid.!', 3000);
    }
  }



  login() {
    this.navCtrl.push("LoginPage");
  }

  ngOnInit() {
    this.registration = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  UploadImage(event) {
    //Show Image
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.isImage = true;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  showToaster(message, duration) {
    this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom'
    }).present();
  }

}
