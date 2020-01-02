import { Injectable } from "@angular/core";
import { DataService } from "../classes/data-service";
import { ICheckoutModel } from "../interfaces/common-model";

@Injectable({
  providedIn: "root"
})
export class CheckoutService extends DataService<ICheckoutModel> {
  private checkoutsDataDump: ICheckoutModel[] = [];

  constructor() {
    super();
    for (const checkout of this.checkoutsDataDump) {
      this.add(checkout);
    }
  }
}
