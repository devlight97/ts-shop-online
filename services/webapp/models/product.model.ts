import { action, makeObservable, observable } from "mobx"

export class ProductModel {
  @observable page: number = 1
  @observable size: number = 4

  constructor() {
    makeObservable(this)
  }

  @action setPagination = (page: number, size: number) => {
    this.page = page
    this.size = size
  }
 
}

export const productModel = new ProductModel()
