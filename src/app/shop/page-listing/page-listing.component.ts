import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductsService } from "src/app/core/services/products.service";
import { BrandsService } from "src/app/core/services/brands.service";
import { CategoriesService } from "src/app/core/services/categories.service";
import { CartService } from "../../core/services/cart.service";
import { IProductModel, IFilterModels } from "src/app/core/interfaces/common-model";
import { Subscription } from 'rxjs';
import { FilterService } from '../../core/services/filter.service';
@Component({
  selector: "app-page-listing",
  templateUrl: "./page-listing.component.html",
  styleUrls: ["./page-listing.component.scss"]
})
export class PageListingComponent implements OnInit, OnDestroy {

  products = [];
  filterSubcriber: Subscription;
  filter: IFilterModels;
  constructor(
    private filterserve: FilterService,
    private productDB: ProductsService,
    private categoryDB: CategoriesService,
    private brandDB: BrandsService,
    private cartDB: CartService,
  ) { }

  ngOnInit() {
    this.initProduct();
  }
  ngOnDestroy(): void {
    if (this.filterSubcriber) {
      this.filterSubcriber.unsubscribe();
    }
  }
  async initProduct() {
    this.filterSubcriber = this.filterserve.filter.subscribe(async f => {
      this.filter = f;
      this.products = await this.productDB.list(x => (f.category == null || x.categoryId == f.category) && (f.brand == null || x.brandId == f.brand));
      if (f.sorting === 1) {
        this.products = this.products.sort(function (a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
        })
      }
      if (f.sorting === 2) {
        this.products = this.products.sort(function (a, b) {
          return parseFloat(b.price) - parseFloat(a.price);
        })
      }
    });
  }
  async addToCart(product: IProductModel) {
    this.cartDB.getProductItemCount(product.id);
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
