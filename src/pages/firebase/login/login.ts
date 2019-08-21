import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public af: AngularFireAuth,
    public afDb: AngularFireDatabase, private toastr: ToastController) {
  }

  ngOnInit() {
    this.login = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  onLogin() {
    this.af.auth.signInWithEmailAndPassword(this.login.value.email, this.login.value.password).then((success) => {
      this.showToastr('Login successful', 3000)
      const userId = this.af.auth.currentUser.uid;
      this.navCtrl.push('FormPage', {
        id: userId
      });
    }).catch((error) => {
      this.showToastr(error.message, 3000);
    });
  }

  showToastr(message, duration) {
    this.toastr.create({
      message: message,
      duration: duration,
      position: 'bottom'
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registration() {
    this.navCtrl.push("RegistrationPage");
  }
  form() {
    this.navCtrl.push("FormPage");
  }
}
