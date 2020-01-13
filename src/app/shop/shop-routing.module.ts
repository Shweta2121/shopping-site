import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageListingComponent } from "./page-listing/page-listing.component";
import { PageProductDetailsComponent } from "./page-product-details/page-product-details.component";

const routes: Routes = [
  {
    path: "",
    component: PageListingComponent
  },
  { path: "products/:productId", component: PageProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
