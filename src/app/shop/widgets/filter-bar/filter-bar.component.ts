import { Component, OnInit } from "@angular/core";
import { BrandsService } from "src/app/core/services/brands.service";
import { CategoriesService } from "src/app/core/services/categories.service";
import {
  ICategoryModel,
  IBrandModel
} from "src/app/core/interfaces/common-model";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})
export class FilterBarComponent implements OnInit {
  categories: ICategoryModel[] = [];
  brands: IBrandModel[] = [];
  constructor(
    private brandDB: BrandsService,
    private categoryDB: CategoriesService
  ) {}

  ngOnInit() {
    this.initCategory();
    this.initBrand();
  }

  async initCategory() {
    this.categories = await this.categoryDB.list();
  }
  async initBrand() {
    this.brands = await this.brandDB.list();
  }
}
