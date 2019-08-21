import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebasePage } from './firebase';

@NgModule({
  declarations: [
    FirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(FirebasePage),
  ],
})
export class FirebasePageModule {}
