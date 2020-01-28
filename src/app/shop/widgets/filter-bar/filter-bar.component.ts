import { Component, OnInit } from "@angular/core";
import { BrandsService } from "src/app/core/services/brands.service";
import { CategoriesService } from "src/app/core/services/categories.service";
import { FilterService } from "src/app/core/services/filter.service";
import {
  ICategoryModel,
  IBrandModel, IProductModel
} from "src/app/core/interfaces/common-model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})
export class FilterBarComponent implements OnInit {
  products = [];
  categories: ICategoryModel[] = [];
  brands: IBrandModel[] = [];
  filterForm: FormGroup;
  private formCategoryChangeSub: Subscription;
  private formBrandChangeSub: Subscription;
  private formSortByChangeSub: Subscription;
  constructor(
    private productDB: ProductsService,
    private brandDB: BrandsService,
    private categoryDB: CategoriesService,
    private fb: FormBuilder,
    private FilterServe: FilterService
  ) { }

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
      brandId: [null],
      categoryId: [null],
      sortBy: [null]
    });
    this.formBrandChangeSub = this.filterForm.controls.brandId.valueChanges.subscribe(
      res => {
        let a = null;
        if (res !== "null") {
          a = parseInt(res);
        }
        this.FilterServe.filterBrand(a);
      }
    );
    this.formCategoryChangeSub = this.filterForm.controls.categoryId.valueChanges.subscribe(
      res => {
        let a = null;
        if (res !== "null") {
          a = parseInt(res);
        }
        this.FilterServe.filterCategory(a);
      }
    );
    this.formSortByChangeSub = this.filterForm.controls.sortBy.valueChanges.subscribe(
      res => {
        let a = null;
        if (res !== "null") {
          a = parseInt(res);
        }
        this.FilterServe.filterSort(a);
      }
    );
  }
}
