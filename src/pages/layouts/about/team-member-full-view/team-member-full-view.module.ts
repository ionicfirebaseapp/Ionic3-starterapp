import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamMemberFullViewPage } from './team-member-full-view';

@NgModule({
  declarations: [
    TeamMemberFullViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamMemberFullViewPage),
  ],
  exports: [
    TeamMemberFullViewPage
  ]
})
export class TeamMemberFullViewPageModule {}
