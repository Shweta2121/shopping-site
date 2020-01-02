import { IDataModel } from "../interfaces/data-model";

export class DataService<T> {
  private table: T[] = [];

  async add(data: T) {
    const now = new Date();
    const pl: T = {
      id: now.getTime(),
      createdAt: now,
      modifiedAt: now,
      isActive: true,
      ...data
    };
    this.table.push(pl);
    return pl;
  }

  async update(id: number, data: T) {
    const datasetId = this.table.findIndex(v => (v as IDataModel).id === id);
    let dataset: T = this.table[datasetId];
    const now = new Date();
    const pl: T = {
      ...dataset,
      ...data,
      modifiedAt: now
    };
    this.table[datasetId] = pl;
    return pl;
  }

  async delete(id: number) {
    const datasetId = this.table.findIndex(v => (v as IDataModel).id === id);
    this.table.splice(datasetId, 1);
    return;
  }

  async get(id: number) {
    const datasetId = this.table.findIndex(v => (v as IDataModel).id === id);
    const pl = this.table[datasetId];
    return pl;
  }

  async list(query?: (value: T) => boolean) {
    let pl = [];
    if (query) pl = this.table.filter(query);
    else pl = this.table;
    return pl;
  }
}
