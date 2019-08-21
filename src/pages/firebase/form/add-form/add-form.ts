import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-add-form',
  templateUrl: 'add-form.html',
})
export class AddFormPage {
  public userInfo = {
    city: '',
    country: '',
    mobileNo: ''
  }
  public userId: any;
  private updateInfo: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afDb: AngularFireDatabase, public af: AngularFireAuth,
    private toastCtrl: ToastController) {
    this.userId = this.af.auth.currentUser.uid;
    if (this.userId) {
      this.getUserInfoUpdate();
    }
  }

  getUserInfoUpdate() {
    this.afDb.object('userInfo/' + this.userId).valueChanges().subscribe((res: any) => {
      if (res != null) {
        this.userInfo = res;
        this.updateInfo = false;
      }
    })
  }

  addUserInfo() {
    if (this.updateInfo) {
      if (this.userId) {
        this.afDb.object('userInfo/' + this.userId).set(this.userInfo).then(() => {
          this.showToaster('User Info saved successfully', 3000);
          this.navCtrl.pop();
        }).catch(error => this.showToaster(error.message, 3000));
      } else {
        this.showToaster('Login First', 3000);
      }
    } else {
      if (this.userId) {
        this.afDb.object('userInfo/' + this.userId).update(this.userInfo).then(() => {
          this.showToaster('User info updated successfully', 3000);
          this.navCtrl.pop();
        }).catch(error => this.showToaster(error.message, 3000));
      } else {
        this.showToaster('Login first', 3000)
      }
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
