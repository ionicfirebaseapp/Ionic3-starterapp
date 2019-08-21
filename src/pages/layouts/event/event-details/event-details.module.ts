import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './event-details';
//import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    EventDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdWUzLYA2SlGWLcpTl8qNgUHcajHlYeXI'
    })
  ],
  exports: [
    EventDetailsPage
  ]
})
export class EventDetailsPageModule {}
