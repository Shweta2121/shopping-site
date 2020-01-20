import { Component, OnInit } from "@angular/core";
import { IProductModel } from "src/app/core/interfaces/common-model";
import { ProductsService } from "src/app/core/services/products.service";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../core/services/cart.service";

@Component({
  selector: "app-page-product-details",
  templateUrl: "./page-product-details.component.html",
  styleUrls: ["./page-product-details.component.scss"]
})
export class PageProductDetailsComponent implements OnInit {
  products = [];
  private routeParamsub;
  productdetails: IProductModel;
  constructor(
    private productDB: ProductsService,
    private route: ActivatedRoute,
    private cartserve: CartService
  ) {}

  ngOnInit() {
    this.initProductdetails();
  }
  initProductdetails() {
    this.routeParamsub = this.route.params.subscribe(async params => {
      const id: number = parseInt(params.productId);
      this.productdetails = await this.productDB.get(id);
    });
  }
  ngOnDestroy() {
    if (this.routeParamsub != null) {
      this.routeParamsub.unsubscribe();
    }
  }
  async addToCart(productdetails: IProductModel) {
    this.cartserve.addItem({
      id: Date.now(),
      productId: productdetails.id,
      image: productdetails.images,
      name: productdetails.name,
      description: productdetails.description,
      price: productdetails.price,
      qty: 1,
      amount: productdetails.price
    });
  }
}
