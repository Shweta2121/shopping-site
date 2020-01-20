import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppbarComponent } from "./appbar/appbar.component";
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { PageLoginComponent } from "../auth/page-login/page-login.component";
import { PageRegisterComponent } from "../auth/page-register/page-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "../auth/helpers/jwt.interceptor";
import { fakeBackendProvider } from "../auth/helpers/fake-backend";
import { CheckoutModule } from "../checkout/checkout.module";

@NgModule({
  declarations: [AppbarComponent, PageLoginComponent, PageRegisterComponent],
  imports: [
    CommonModule,
    CheckoutModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  exports: [
    AppbarComponent,
    AuthRoutingModule,
    PageLoginComponent,
    PageRegisterComponent
  ]
})
export class UiModule {}
