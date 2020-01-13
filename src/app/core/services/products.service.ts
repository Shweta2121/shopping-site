import { Injectable } from "@angular/core";
import { IProductModel } from "../interfaces/common-model";
import { DataService } from "../classes/data-service";

@Injectable({
  providedIn: "root"
})
export class ProductsService extends DataService<IProductModel> {
  private productDataDump: IProductModel[] = [
    {
      id: 1,
      name: "Google Pixel Slate",
      images: "../../../assets/image/tablet/google/81Jn8zj5JTL._SL1500_.jpg",
      description: "Google Pixel Slate 12.3-Inch 2 in 1 Tablet",
      price: 90000,
      categoryId: 1,
      brandId: 1,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 2,
      name: "Apple MacBook Pro ",
      images: "../../../assets/image/laptop/Apple/61hG5bKTiQL._SL1500_.jpg",
      description: "Apple MacBook Pro (15-inch Retina, Touch Bar, - Silver",
      price: 85000,
      categoryId: 2,
      brandId: 2,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 3,
      name: "Apple iPhone 11 Pro",
      images: "../../../assets/image/mobile/Apple/611JavcU70L._SL1024_.jpg",
      description: "Apple iPhone 11 Pro Max (512GB) - Gold",
      price: 100000,
      categoryId: 3,
      brandId: 3,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 4,
      name: "OPPO Find X",
      images: "../../../assets/image/mobile/Oppo/51tIjUZMEaL._SL1246_.jpg",
      description: "OPPO Find X (Glacier Blue, 8GB RAM, 256GB Storage)",
      price: 41000,
      categoryId: 4,
      brandId: 4,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 5,
      name: "Lenovo Tab4 10 Tablet",
      images: "../../../assets/image/tablet/lenovo/51PVcR9nQPL._SL1000_.jpg",
      description: "Lenovo Tab4 10 Tablet (10.1 inch,16GB, Non Calling) ",
      price: 15000,
      categoryId: 5,
      brandId: 5,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 6,
      name: "Redmi Note 7 Pro",
      images: "../../../assets/image/mobile/Redmi/81b4tnJ8ITL._SL1500_.jpg",
      description: "Redmi Note 7 Pro (Neptune Blue, 128GB, 8GB RAM)",
      price: 18000,
      categoryId: 6,
      brandId: 6,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 7,
      name: "Samsung Galaxy M30s",
      images: "../../../assets/image/mobile/Samsung/71EvOK7BhuL._SL1500_.jpg",
      description: "Samsung Galaxy M30s Blue, 4GB RAM, Super AMOLED Display",
      price: 16000,
      categoryId: 7,
      brandId: 7,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 8,
      name: "HP EliteBook 1040",
      images: "../../../assets/image/laptop/hp/81tEiJj2M+L._SL1500_.jpg",
      description: "HP EliteBook 1040 G4 Notebook PC 2019 14-inch Laptop",
      price: 550000,
      categoryId: 8,
      brandId: 8,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 9,
      name: "Sony Xperia Z5 Dual",
      images: "../../../assets/image/mobile/Sony/61jkcuw1wtL._SL1202_.jpg",
      description: "Sony Xperia Z5 Dual (Gold) 23MP primary camera ",
      price: 55000,
      categoryId: 9,
      brandId: 9,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 10,
      name: "Samsung Galaxy Tab",
      images: "../../../assets/image/tablet/samsung/71983JB6wpL._SL1500_.jpg",
      description:
        "Samsung Galaxy Tab S6 (10.5-inch, WiFi + 4G LTE + Voice Calling)",
      price: 63000,
      categoryId: 10,
      brandId: 10,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },
    {
      id: 11,
      name: "Micromax Canvas tab",
      images: "../../../assets/image/tablet/micromax/41LRmDjnQiL.jpg",
      description: "Micromax Canvas tab P480 Tablet, Grey",
      price: 9000,
      categoryId: 11,
      brandId: 11,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    },

    {
      id: 12,
      name: "Lenovo Yoga S940 ",
      images: "../../../assets/image/laptop/lenovo/61NV06Gd-hL._SL1500_.jpg",
      description: "Lenovo Yoga S940 8th Gen Intel Core i7 14.0-inch FHD",
      price: 60000,
      categoryId: 12,
      brandId: 12,
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    }
  ];
  constructor() {
    super();
    for (const product of this.productDataDump) {
      this.add(product);
    }
  }
}
