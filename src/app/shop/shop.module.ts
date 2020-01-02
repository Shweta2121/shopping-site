import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShopRoutingModule } from "./shop-routing.module";
import { PageListingComponent } from "./page-listing/page-listing.component";
import { PageProductDetailsComponent } from "./page-product-details/page-product-details.component";
import { FilterBarComponent } from './widgets/filter-bar/filter-bar.component';

@NgModule({
  declarations: [PageListingComponent, PageProductDetailsComponent, FilterBarComponent],
  imports: [CommonModule, ShopRoutingModule],
  exports: [PageListingComponent, PageProductDetailsComponent, FilterBarComponent]
})
export class ShopModule {}
