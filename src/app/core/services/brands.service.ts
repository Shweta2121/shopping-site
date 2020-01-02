import { Injectable } from "@angular/core";
import { IBrandModel } from "../interfaces/common-model";
import { DataService } from "../classes/data-service";

@Injectable({
  providedIn: "root"
})
export class BrandsService extends DataService<IBrandModel> {
  private brandsDataDump: IBrandModel[] = [
    {
      id: Date.now(),
      name: "Google",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "Apple",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "lenovo",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },

    {
      id: Date.now(),
      name: "Oppo",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "hp",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "Redmi",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "Samsung",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "Sony",
      logoUrl: "abc",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
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
