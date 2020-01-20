import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageCartComponent } from "./page-cart/page-cart.component";
import { PagePaymentComponent } from "./page-payment/page-payment.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
  { path: "cartdata", component: PageCartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "shipping", component: PagePaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
