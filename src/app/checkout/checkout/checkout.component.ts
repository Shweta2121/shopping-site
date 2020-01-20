import { Component, OnInit } from "@angular/core";
import { CartService } from "../../core/services/cart.service";
import { ICartModel } from "src/app/core/interfaces/common-model";
import { Subscription } from "rxjs";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  cart: ICartModel;
  cartSubcriber: Subscription;
  constructor(private cartserve: CartService) {}
  ngOnInit() {
    this.cartSubcriber = this.cartserve.cart.subscribe(c => {
      this.cart = c;
    });
  }
  ngOnDestroy() {
    if (this.cartSubcriber) {
      this.cartSubcriber.unsubscribe();
    }
  }
}
