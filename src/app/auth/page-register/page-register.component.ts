import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { UserService } from "../../core/services/user.service";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-page-register",
  templateUrl: "./page-register.component.html",
  styleUrls: ["./page-register.component.scss"]
})
export class PageRegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authServe: AuthService,
    private userServe: UserService
  ) {
    // redirect to home if already logged in
    if (this.authServe.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userServe
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
