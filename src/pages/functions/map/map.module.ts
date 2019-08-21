import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { AgmCoreModule } from '@agm/core';
import { StyledMap } from './styled-map.directive';
import { DirectionsMapDirective } from './direction.directive';

@NgModule({
  declarations: [
    MapPage,
    StyledMap,
    DirectionsMapDirective
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9QKBcDPx-r1y23IHE-Wf3ZjNZZJ1I6H4',
      libraries: ["places"]
    })
  ],
  exports: [
    MapPage
  ]
})
export class MapPageModule { }
