import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { PageLoginComponent } from "./page-login/page-login.component";
import { PageRegisterComponent } from "./page-register/page-register.component";

@NgModule({
  declarations: [PageLoginComponent, PageRegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [PageLoginComponent, PageRegisterComponent]
})
export class AuthModule {}
