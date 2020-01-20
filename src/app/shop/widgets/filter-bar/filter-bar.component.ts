import { Component, OnInit } from "@angular/core";
import { BrandsService } from "src/app/core/services/brands.service";
import { CategoriesService } from "src/app/core/services/categories.service";
import { FilterService } from "src/app/core/services/filter.service";
import {
  ICategoryModel,
  IBrandModel
} from "src/app/core/interfaces/common-model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})
export class FilterBarComponent implements OnInit {
  categories: ICategoryModel[] = [];
  brands: IBrandModel[] = [];
  filterForm: FormGroup;
  private formCategoryChangeSub: Subscription;
  private formBrandChangeSub: Subscription;
  private formSortByChangeSub: Subscription;
  brand = "All";
  category = "All";
  constructor(
    private brandDB: BrandsService,
    private categoryDB: CategoriesService,
    private fb: FormBuilder,
    private FilterServe: FilterService
  ) {}

  ngOnInit() {
    this.initCategory();
    this.initBrand();
    this.initForm();
  }

  async initCategory() {
    this.categories = await this.categoryDB.list();
  }
  async initBrand() {
    this.brands = await this.brandDB.list();
  }
  initForm() {
    this.filterForm = this.fb.group({
      brandId: [""],
      categoryId: [""],
      sortBy: [""]
    });
    this.formBrandChangeSub = this.filterForm.controls.brandId.valueChanges.subscribe(
      res => {
        this.brand = res;
        this.FilterServe.filterInit(this.brand, this.category);
      }
    );
    this.formCategoryChangeSub = this.filterForm.controls.categoryId.valueChanges.subscribe(
      res => {
        this.category = res;
        this.FilterServe.filterInit(this.brand, this.category);
      }
    );
    this.formSortByChangeSub = this.filterForm.controls.sortBy.valueChanges.subscribe(
      res => {}
    );
  }
}
