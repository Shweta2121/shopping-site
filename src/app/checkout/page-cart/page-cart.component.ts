import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../../core/services/cart.service";
import { AuthService } from "../../auth/services/auth.service";
import {
  ICartItemModel,
  ICartModel,
  IUserModel
} from "src/app/core/interfaces/common-model";
import { Observable, Subscription } from "rxjs";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-page-cart",
  templateUrl: "./page-cart.component.html",
  styleUrls: ["./page-cart.component.scss"]
})
export class PageCartComponent implements OnInit, OnDestroy {
  currentUser: IUserModel;
  cartSubcriber: Subscription;
  cart: ICartModel;
  constructor(
    private cartserve: CartService,
    private authserve: AuthService,
    private router: Router
  ) {
    this.authserve.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.cartSubcriber = this.cartserve.cart.subscribe(c => {
      this.cart = c;
    });
  }
  async increment(cart) {
    const currentCart = await this.cart;
    const getIndexOfProductItemExisit = currentCart.items.findIndex(
      i => i.productId === cart.productId
    );
    const qyt = this.cart.items[getIndexOfProductItemExisit].qty++;
    this.cartserve.updateItem(cart);
  }
  async decrement(cart) {
    const currentCart = await this.cart;
    const getIndexOfProductItemExisit = currentCart.items.findIndex(
      i => i.productId === cart.productId
    );
    const qyt = this.cart.items[getIndexOfProductItemExisit].qty--;
    this.cartserve.updateItem(cart);
  }
  auth(currentUser) {
    if (currentUser) {
      this.router.navigate(["/checkout"]);
    } else {
      this.router.navigate(["/register"]);
    }
  }
  delete(id) {
    this.cartserve.delete(id);
  }
  ngOnDestroy() {
    if (this.cartSubcriber) {
      this.cartSubcriber.unsubscribe();
    }
  }
}
