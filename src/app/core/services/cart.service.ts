import { Injectable } from "@angular/core";
import { DataService } from "../classes/data-service";
import { ICartModel } from "../interfaces/common-model";

@Injectable({
  providedIn: "root"
})
export class CartService extends DataService<ICartModel> {
  private cartsDataDump: ICartModel[] = [];

  constructor() {
    super();
    for (const cart of this.cartsDataDump) {
      this.add(cart);
    }
  }
}
