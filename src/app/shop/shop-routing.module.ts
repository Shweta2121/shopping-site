import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageListingComponent } from "./page-listing/page-listing.component";

const routes: Routes = [
  {
    path: "",
    component: PageListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
