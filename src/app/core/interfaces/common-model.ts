import { IDataModel } from "./data-model";

export interface ICategoryModel extends IDataModel {
  name: string;
}

export interface IBrandModel extends IDataModel {
  name: string;
  logoUrl: string;
}

export interface IProductModel extends IDataModel {
  name: string;
  images: string[];
  description: string;
  price: number;
  categoryId: number;
  brandId: number;
}

export interface IInventoryModel extends IDataModel {
  productId: number;
  outStock: number;
  inStock: number;
  reservedStock: number;
}

export interface ICartModel extends IDataModel {
  userId?: number;
  address?: IAddressModel;
  items?: ICartItemModel[];
  subTotal: number;
  total: number;
  gstAmount: number;
}

export interface ICartItemModel {
  productId: number;
  qty: number;
  price: number;
  amount: number;
}

export interface IAddressModel {
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface ICheckoutModel extends ICartModel {
  paymentMode: "card" | "cash" | "upi";
}

export interface IUserModel extends IDataModel {
  name: string;
  address?: IAddressModel;
  email?: string;
  password?: string;
}
