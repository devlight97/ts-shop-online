import { IProduct } from 'interfaces/product.interface'
import { isNil } from 'lodash'
import { BaseService } from './base-service'

interface ProductView {
  products: IProduct[]
  totalPage: number
}

interface IProductDetail extends IProduct {
  post: {
    id: number
    content: string
  }
}

export class ProductService extends BaseService {
  public baseUrl = '/api/v1/product'

  public async getView({ page, size, brand }: { page: number; size: number, brand?: string }): Promise<ProductView> {
    return this.get<ProductView>(`/view?page=${page}&size=${size}${isNil(brand) ? '' : '&brand=' + brand}`)
  }

  public async getById(id: number): Promise<IProductDetail> {
    return this.get<IProductDetail>(`/view/${id}`)
  }

  public async getBrands() {
    return this.get<string[]>(`/brands`)
  }
}

export const productService = new ProductService()
