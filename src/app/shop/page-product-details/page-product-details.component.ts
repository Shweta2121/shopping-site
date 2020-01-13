import { Component, OnInit } from "@angular/core";
import { IProductModel } from "src/app/core/interfaces/common-model";
import { ProductsService } from "src/app/core/services/products.service";
import { ActivatedRoute } from "@angular/router";
import { IDataModel } from "src/app/core/interfaces/data-model";

@Component({
  selector: "app-page-product-details",
  templateUrl: "./page-product-details.component.html",
  styleUrls: ["./page-product-details.component.scss"]
})
export class PageProductDetailsComponent implements OnInit {
  private routeParamsub;
  productdetails: IProductModel;
  constructor(
    private productDB: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initProductdetails();
  }
  async initProductdetails() {
    this.routeParamsub = this.route.params.subscribe(async params => {
      // console.log(params);
      // console.log(params.productId);
      // const id = +params.productId;
      // const id = +params["productId"];
      const id: number = parseInt(params.productId);
      this.productdetails = await this.productDB.get(id);
    });
  }
  ngOnDestroy() {
    if (this.routeParamsub != null) {
      this.routeParamsub.unsubscribe();
    }
  }
}
