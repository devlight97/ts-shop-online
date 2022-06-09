export interface IProduct {
  id: number
  name: string
  brief: string
  postId: number
  quantity: number
  price: number
  pictureUrl: string
}

export interface IProductCart {
  id: number
  name: string
  brief: string
  count: number
  price: number
  pictureUrl: string
}

export interface ICart {
  id: string
  products: IProductCart[]
}
