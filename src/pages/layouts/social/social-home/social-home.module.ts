import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialHomePage } from './social-home';

@NgModule({
  declarations: [
    SocialHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SocialHomePage),
  ],
  exports: [
    SocialHomePage
  ]
})
export class SocialHomePageModule {}
