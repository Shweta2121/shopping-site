import { Injectable } from "@angular/core";
import { DataService } from "../classes/data-service";
import { ICategoryModel } from "../interfaces/common-model";

@Injectable({
  providedIn: "root"
})
export class CategoriesService extends DataService<ICategoryModel> {
  private categoriesDataDump: ICategoryModel[] = [
    {
      id: 1,
      name: "Laptop",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      name: "Mobile",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      name: "Tablet",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    }
  ];
  constructor() {
    super();
    for (const category of this.categoriesDataDump) {
      this.add(category);
    }
  }
}
