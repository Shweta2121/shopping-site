import { Injectable } from "@angular/core";
import { DataService } from "../classes/data-service";
import { IInventoryModel } from "../interfaces/common-model";

@Injectable({
  providedIn: "root"
})
export class InventaryService extends DataService<IInventoryModel> {
  public inventorydatadump: IInventoryModel[] = [
    {
      id: 1,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 1,
      outStock: 18,
      inStock: 12,
      reservedStock: 4
    },
    {
      id: 2,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 2,
      outStock: 19,
      inStock: 11,
      reservedStock: 2
    },
    {
      id: 3,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 3,
      outStock: 15,
      inStock: 8,
      reservedStock: 4
    },
    {
      id: 4,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 4,
      outStock: 11,
      inStock: 1,
      reservedStock: 5
    },
    {
      id: 5,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 5,
      outStock: 12,
      inStock: 10,
      reservedStock: 1
    },
    {
      id: 6,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 6,
      outStock: 13,
      inStock: 9,
      reservedStock: 4
    },
    {
      id: 7,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 7,
      outStock: 14,
      inStock: 8,
      reservedStock: 6
    },
    {
      id: 8,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 8,
      outStock: 15,
      inStock: 7,
      reservedStock: 7
    },
    {
      id: 9,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 9,
      outStock: 19,
      inStock: 11,
      reservedStock: 2
    },
    {
      id: 10,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 10,
      outStock: 19,
      inStock: 11,
      reservedStock: 2
    },
    {
      id: 11,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 11,
      outStock: 19,
      inStock: 11,
      reservedStock: 2
    },
    {
      id: 12,
      isActive: true,
      modifiedAt: new Date(),
      createdAt: new Date(),
      productId: 12,
      outStock: 19,
      inStock: 11,
      reservedStock: 2
    }
  ];
  constructor() {
    super();
    for (const inventary of this.inventorydatadump) {
      this.add(inventary);
    }
  }
}
