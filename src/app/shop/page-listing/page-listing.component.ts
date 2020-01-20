import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/core/services/products.service";
import { BrandsService } from "src/app/core/services/brands.service";
import { CategoriesService } from "src/app/core/services/categories.service";
import { CartService } from "../../core/services/cart.service";
import { IProductModel } from "src/app/core/interfaces/common-model";
@Component({
  selector: "app-page-listing",
  templateUrl: "./page-listing.component.html",
  styleUrls: ["./page-listing.component.scss"]
})
export class PageListingComponent implements OnInit {
  products = [];
  category;
  brand;
  constructor(
    private productDB: ProductsService,
    private categoryDB: CategoriesService,
    private brandDB: BrandsService,
    private cartDB: CartService
  ) {}

  ngOnInit() {
    this.initProduct();
    this.initcategory();
    this.initbrand();
  }
  async initProduct() {
    this.products = await this.productDB.list();
  }
  async initcategory() {
    this.category = await this.categoryDB.list();
    let i = 0;
    for (i = 0; i < this.products.length; i++) {
      let index = this.category.findIndex(
        val => val.id === this.products[i].categoryId
      );
      let prod = this.category[index].name;
      this.products[i].categoryname = prod;
    }
  }
  async initbrand() {
    this.brand = await this.brandDB.list();
    let i = 0;
    for (i = 0; i < this.products.length; i++) {
      let index = this.brand.findIndex(
        val => val.id === this.products[i].brandId
      );
      let prod = this.brand[index].name;
      this.products[i].brandname = prod;
    }
  }
  async addToCart(product: IProductModel) {
    this.cartDB.getProductItemCount(product.id);
    console.log(product.id);
    this.cartDB.addItem({
      id: Date.now(),
      productId: product.id,
      image: product.images,
      name: product.name,
      description: product.description,
      price: product.price,
      qty: 1,
      amount: product.price
    });
  }
}
