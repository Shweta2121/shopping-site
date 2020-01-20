import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageLoginComponent } from "./page-login/page-login.component";
import { PageRegisterComponent } from "./page-register/page-register.component";

const routes: Routes = [
  { path: "login", component: PageLoginComponent },
  { path: "register", component: PageRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
