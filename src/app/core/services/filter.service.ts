import { Injectable } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { IProductModel } from "src/app/core/interfaces/common-model";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  products: IProductModel[] = [];
  constructor(private productserve: ProductsService) {}

  async filterInit(brand?: any, category?: any) {
    this.products = await this.productserve.list(x => x.brandId == brand);
    console.log(this.products);
    this.products = await this.productserve.list(x => x.categoryId == category);
    console.log(this.products);
  }
}
