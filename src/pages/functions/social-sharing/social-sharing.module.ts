import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialSharingPage } from './social-sharing';

@NgModule({
  declarations: [
    SocialSharingPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialSharingPage),
  ],
  exports: [
    SocialSharingPage
  ]
})
export class SocialSharingPageModule {}
