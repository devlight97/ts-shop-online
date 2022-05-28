export interface IProduct {
  id: number
  name: string
  brief: string
  postId: number
  quantity: number
  price: number
  pictureId: number
}

export interface IProductCart {
  id: number
  name: string
  brief: string
  count: number
  price: number
  pictureId: number
}

export interface ICart {
  id: string
  products: IProductCart[]
}
