import { IProduct } from 'interfaces/product.interface'
import { BaseService } from './base-service'

interface ProductView {
  products: IProduct[]
  totalPage: number
}

export class ProductService extends BaseService {
  public baseUrl = '/api/v1/product'

  public async getView({ page, size }: { page: number; size: number }): Promise<ProductView> {
    return this.get<ProductView>(`/view?page=${page}&size=${size}`)
  }

  public async getById(id: number): Promise<IProduct> {
    return this.get<IProduct>(`/view/${id}`)
  }
}

export const productService = new ProductService()
