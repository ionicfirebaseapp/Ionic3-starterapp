import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditFormPage } from './edit-form';

@NgModule({
  declarations: [
    EditFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EditFormPage),
  ],
})
export class EditFormPageModule {}
