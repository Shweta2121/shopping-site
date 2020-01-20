import { Injectable } from "@angular/core";
import { DataService } from "../classes/data-service";
import { ICartModel, ICartItemModel } from "../interfaces/common-model";
import { ProductsService } from "./products.service";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { take, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cartCounts;
  private _cart: ICartModel = {
    items: [],
    subTotal: 0,
    gstAmount: 0,
    shipping: 0,
    grandtotal: 0
  };
  private cartSubject: BehaviorSubject<ICartModel> = new BehaviorSubject<
    ICartModel
  >(this._cart);
  private cartObs: Observable<ICartModel> = this.cartSubject.asObservable();
  constructor(private productDB: ProductsService) {}

  get cart() {
    return this.cartObs;
  }

  async addItem(item: ICartItemModel) {
    const currentCart = await this.cart.pipe(take(1)).toPromise();
    const currentItems = currentCart.items;
    const getIndexOfProductItemExisit = currentItems.findIndex(
      i => i.productId === item.productId
    );
    if (getIndexOfProductItemExisit > -1) {
      currentItems[getIndexOfProductItemExisit].qty += item.qty;
      currentItems[getIndexOfProductItemExisit].amount =
        currentItems[getIndexOfProductItemExisit].qty * item.price;
    } else {
      const _item = item;
      _item.amount = _item.qty * _item.price;
      currentItems.push(_item);
    }
    const _pl = this.addCartItemsModifer(currentItems);
    this.cartSubject.next(_pl);
    return _pl;
  }

  async updateItem(item: ICartItemModel) {
    const currentCart = await this.cart.pipe(take(1)).toPromise();
    const currentItems = currentCart.items;
    const getIndexOfProductItemExisit = currentItems.findIndex(
      i => i.productId === item.productId
    );
    if (getIndexOfProductItemExisit > -1) {
      if (item.qty <= 0) {
        currentItems.splice(getIndexOfProductItemExisit, 1);
      } else {
        currentItems[getIndexOfProductItemExisit] = item;
        currentItems[getIndexOfProductItemExisit].amount =
          currentItems[getIndexOfProductItemExisit].qty *
          currentItems[getIndexOfProductItemExisit].price;
      }
      const _pl = this.addCartItemsModifer(currentItems);
      this.cartSubject.next(_pl);
      return _pl;
    }
    throw {
      status: "Error",
      message: "Product Item not found in user cart."
    };
  }

  private addCartItemsModifer(items: ICartItemModel[]) {
    const data = {
      items: items,
      subTotal: 0,
      gstAmount: 0,
      shipping: 0,
      grandtotal: 0
    };
    for (let item of items) {
      data.subTotal += item.amount;
    }
    data.shipping = 10;
    data.gstAmount = (data.subTotal + data.shipping) * 0.18;
    data.grandtotal = (data.subTotal + data.shipping) * 1.18;
    return data;
  }

  getProductItemCount(productId: number) {
    return this.cart.pipe(
      map(c => {
        const item = c.items.find(i => i.productId === productId);
        return item ? item.qty : 0;
      })
    );
  }
  delete(id) {
    const cartIndex = this._cart.items.findIndex(val => val.id === id);
    this._cart.items.splice(cartIndex, 1);
  }
}
