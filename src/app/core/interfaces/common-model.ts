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
  images: string;
  // images: string[];
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
  gstAmount: number;
  shipping: number;
  grandtotal: number;
}

export interface ICartItemModel {
  id: number;
  productId: number;
  qty: number;
  price: number;
  amount: number;
  image: string;
  name: string;
  description: string;
}

export interface IAddressModel {
  Firstname: string;
  Lastname: string;
  Address: string;
  Address2?: string;
  country: string;
  state: string;
  pincode: string;
}

export interface ICheckoutModel extends ICartModel {
  paymentMode: "card" | "cash" | "upi";
}

export interface IUserModel {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
