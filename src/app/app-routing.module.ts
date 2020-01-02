import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "cart",
    loadChildren: () =>
      import("./checkout/checkout.module").then(mod => mod.CheckoutModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(mod => mod.AuthModule)
  },
  {
    path: "p",
    loadChildren: () =>
      import("./profile/profile.module").then(mod => mod.ProfileModule)
  },
  {
    path: "",
    loadChildren: () => import("./shop/shop.module").then(mod => mod.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
