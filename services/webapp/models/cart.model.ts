import { action, computed, makeObservable, observable } from 'mobx'

import { IProductCart } from 'interfaces/product.interface'
import { cartService } from '@services/cart.service'

export class CartModel {
  @observable products: IProductCart[] = []
  @observable hasDataToBeUpdate = false

  constructor() {
    makeObservable(this)
  }

  @computed
  get totalPrice() {
    return this.products.reduce((total, product) => total + product.count * product.price, 0)
  }

  @action
  loadCart = async (cartId: string) => {
    try {
      const cart = await cartService.getCart(cartId)
      this.hasDataToBeUpdate = false
      this.products = cart.products
    } catch (error) {
      window.localStorage.removeItem('cart_id')
    }
  }

  @action
  createCart = async (product: IProductCart) => {
    const cart = await cartService.create(product)
    window.localStorage.setItem('cart_id', cart.id)
    this.products = cart.products || []
  }

  @action
  addToCart = async (cartId: string, product: IProductCart) => {
    await cartService.addToCart(cartId, product)
    this.loadCart(cartId)
  }

  @action
  deleteProductCart = async (productId: number) => {
    this.products = this.products.filter((p) => p.id !== productId)
    this.hasDataToBeUpdate = true
  }

  @action
  updateCart = async () => {
    const cartId = window.localStorage.getItem('cart_id')
    await cartService.updateCart(cartId, this.products)
    this.loadCart(cartId)
  }

  @action
  setProductCart = (product: IProductCart) => {
    this.products = this.products.map((p) => {
      if (p.id !== product.id) {
        return p
      }
      return product
    })
    this.hasDataToBeUpdate = true
  }
}

export const cartModel = new CartModel()
