import { Injectable } from "@angular/core";
import { IFilterModels } from "src/app/core/interfaces/common-model";
import { Observable, BehaviorSubject } from "rxjs";
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class FilterService {
  private _filterProducts: IFilterModels = {
    brand: null,
    category: null,
    sorting: null,
  };

  private behavioursubject$: BehaviorSubject<IFilterModels> = new BehaviorSubject<IFilterModels>(this._filterProducts);

  private filterObs: Observable<IFilterModels> = this.behavioursubject$.asObservable();

  constructor() { }

  get filter() {
    return this.filterObs;
  }

  async filterBrand(brand: number) {
    const currentFilter = await this.filter.pipe(take(1)).toPromise();
    const currentItems = currentFilter.brand = brand;
    this.behavioursubject$.next(currentFilter);
    return currentFilter;
  }

  async filterCategory(category: number) {
    console.log(category)
    const currentFilter = await this.filter.pipe(take(1)).toPromise();
    const currentItems = currentFilter.category = category;
    this.behavioursubject$.next(currentFilter);
    return currentFilter;
  }
  async filterSort(sorting: number) {
    const currentFilter = await this.filter.pipe(take(1)).toPromise();
    const currentItems = currentFilter.sorting = sorting;
    this.behavioursubject$.next(currentFilter);
    return currentFilter;
  }
}
