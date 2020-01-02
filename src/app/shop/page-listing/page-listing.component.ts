import { Component, OnInit } from "@angular/core";
import { IProductModel } from "src/app/core/interfaces/common-model";
import { ProductsService } from "src/app/core/services/products.service";

@Component({
  selector: "app-page-listing",
  templateUrl: "./page-listing.component.html",
  styleUrls: ["./page-listing.component.scss"]
})
export class PageListingComponent implements OnInit {
  products: IProductModel[] = [];
  constructor(private productDB: ProductsService) {}

  ngOnInit() {}
  async initProduct() {
    // this.products = await this.productDB.list();
  }
}
