import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFormPage } from './add-form';

@NgModule({
  declarations: [
    AddFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFormPage),
  ],
})
export class AddFormPageModule {}
