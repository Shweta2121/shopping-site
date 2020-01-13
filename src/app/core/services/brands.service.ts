import { Injectable } from "@angular/core";
import { IBrandModel } from "../interfaces/common-model";
import { DataService } from "../classes/data-service";

@Injectable({
  providedIn: "root"
})
export class BrandsService extends DataService<IBrandModel> {
  private brandsDataDump: IBrandModel[] = [
    {
      id: 1,
      name: "Google",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      name: "Apple",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      name: "lenovo",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },

    {
      id: 4,
      name: "Oppo",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 5,
      name: "hp",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 6,
      name: "Redmi",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 7,
      name: "Samsung",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 8,
      name: "Sony",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 9,
      name: "Micromax",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    }
  ];
  constructor() {
    super();
    for (const brand of this.brandsDataDump) {
      this.add(brand);
    }
  }
}
