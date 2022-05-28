import { useModelProvider } from '@models/model.provider'
import { IProduct, IProductCart } from 'interfaces/product.interface'
import { isNil } from 'lodash'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import React from 'react'

interface IProps {
  product: IProduct
}

export const ProductItem: React.FC<IProps> = observer(({ product }) => {
  const [isProductCart, setIsProductCart] = React.useState(false)
  const {
    cartModel: { createCart, addToCart, products },
  } = useModelProvider()

  React.useEffect(() => {
    const productExisting = products.find((p) => p.id === product.id)
    setIsProductCart(!isNil(productExisting))
  }, [products])

  const handleClickAddToCart = async () => {
    const productCart: IProductCart = {
      id: product.id,
      brief: product.brief,
      count: 1,
      name: product.name,
      pictureId: product.pictureId,
      price: product.price,
    }

    const localCartId = window.localStorage.getItem('cart_id')
    isNil(localCartId) && (await createCart(productCart))
    !isNil(localCartId) &&
      (await addToCart(localCartId, productCart).catch((err) => {
        if (err.response?.status === 404) {
          window.localStorage.removeItem('cart_id')
          createCart(productCart)
        }
      }))
  }

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
      <div className="single-product">
        <div className="product-img">
          <Link href={`/product/${product.id}`}>
            <a href="product-details.html">
              <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
              <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
            </a>
          </Link>
          <div className="button-head">
            <div className="product-action">
              <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#">
                <i className=" ti-eye" />
                <span>Quick Shop</span>
              </a>
              <a title="Wishlist" href="#">
                <i className=" ti-heart " />
                <span>Add to Wishlist</span>
              </a>
              <a title="Compare" href="#">
                <i className="ti-bar-chart-alt" />
                <span>Add to Compare</span>
              </a>
            </div>
            <div className="product-action-2">
              {isProductCart ? (
                <Link href="/cart">
                  <a>View on cart</a>
                </Link>
              ) : (
                <a
                  onClick={handleClickAddToCart}
                >
                  Add to cart
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href={`/product/${product.id}`}>
              {product.name} & id: {product.id}
            </a>
          </h3>
          <div className="product-price">
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
})
