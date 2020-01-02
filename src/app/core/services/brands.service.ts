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
      name: "nokia",
      logoUrl: "jhsd",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "samsung",
      logoUrl: "jhsd",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "apple",
      logoUrl: "jhsd",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "redmi",
      logoUrl: "jhsd",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: Date.now(),
      name: "realme",
      logoUrl: "jhsd",
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
