import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { PageUserDetailsComponent } from './page-user-details/page-user-details.component';

@NgModule({
  declarations: [PageUserDetailsComponent],
  imports: [CommonModule, ProfileRoutingModule],
  exports: [PageUserDetailsComponent]
})
export class ProfileModule {}
