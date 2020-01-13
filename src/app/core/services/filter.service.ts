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
    console.log(brand);
    // console.log(category);
    // this.products = await this.productserve.list();
    // console.log(this.products.findIndex(x => x.brandId === brand));
    this.products = (await this.productserve.list()).find(x => x.id == brand);
    console.log(this.products);
    // this.products = (await this.productserve.list()).find(
    //   x => x.id == category
    // );
    // console.log(this.products);
  }
}
