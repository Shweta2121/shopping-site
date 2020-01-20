import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { PageCartComponent } from "./page-cart/page-cart.component";
import { PagePaymentComponent } from "./page-payment/page-payment.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
  declarations: [PageCartComponent, PagePaymentComponent, CheckoutComponent],
  imports: [CommonModule, CheckoutRoutingModule],
  exports: [PageCartComponent, PagePaymentComponent]
})
export class CheckoutModule {}
