import { ICart, IProductCart } from 'interfaces/product.interface'
import { BaseService } from './base-service'

export class CartService extends BaseService {
  public baseUrl = '/api/v1/cart'

  public async create(product: IProductCart): Promise<ICart> {
    const cart = (await this.post('', product)) as ICart
    return cart
  }

  public async addToCart(cartId: string, product: IProductCart): Promise<void> {
    await this.post('/product', { cartId, product })
  }

  public async getCart(cartId: string): Promise<ICart> {
    return this.get(`/${cartId}`)
  }

  public async deleteFromCart(productId: number, cartId: string) {
    return this.delete(`/product/${productId}?cart_id=${cartId}`)
  }

  public async updateCart(id: string, products: IProductCart[]) {
    return this.put(``, { id, products })
  }
}

export const cartService = new CartService()
