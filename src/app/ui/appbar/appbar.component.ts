import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";
import { IUserModel } from "../../core/interfaces/common-model";
import { CartService } from "../../core/services/cart.service";
import { IProductModel } from "src/app/core/interfaces/common-model";
import { ProductsService } from "src/app/core/services/products.service";

@Component({
  selector: "app-appbar",
  templateUrl: "./appbar.component.html",
  styleUrls: ["./appbar.component.scss"]
})
export class AppbarComponent implements OnInit {
  products = [];
  currentUser: IUserModel;
  constructor(
    private router: Router,
    private authServe: AuthService,
    private CartService: CartService,
    private productDB: ProductsService
  ) {
    this.authServe.currentUser.subscribe(x => (this.currentUser = x));
  }
  ngOnInit() {
    this.initProduct();
  }

  logout() {
    this.authServe.logout();
    this.router.navigate(["/login"]);
  }
  async initProduct() {
    this.products = await this.productDB.list();
  }
}
