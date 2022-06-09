import { useModelProvider } from '@models/model.provider'
import { IProductCart } from 'interfaces/product.interface'

interface IProps {
  product: IProductCart
}

export const CartItem: React.FC<IProps> = ({ product }) => {
  const {
    cartModel: { deleteProductCart, setProductCart },
  } = useModelProvider()

  const handleClickPlusButton = () => {
    setProductCart({ ...product, count: product.count + 1 })
  }

  const handleClickMinusButton = () => {
    if (product.count === 1) {
      return
    }

    setProductCart({ ...product, count: product.count - 1 })
  }

  return (
    <tr>
      <td className="image" data-title="No">
        <img src={product.pictureUrl || 'https://via.placeholder.com/100x100'} alt="#" />
      </td>
      <td className="product-des" data-title="Description">
        <p className="product-name">
          <a href="#">
            {product.name}
          </a>
        </p>
        <p className="product-des">Maboriosam in a tonto nesciung eget distingy magndapibus.</p>
      </td>
      <td className="price" data-title="Price">
        <span>${product.price} </span>
      </td>
      <td className="qty" data-title="Qty">
        {/* Input Order */}
        <div className="input-group">
          <div className="button minus">
            <button type="button" className="btn btn-primary btn-number" onClick={handleClickMinusButton}>
              <i className="ti-minus" />
            </button>
          </div>
          <input type="text" className="input-number" value={product.count} defaultValue={1} />
          <div className="button plus">
            <button type="button" className="btn btn-primary btn-number" onClick={handleClickPlusButton}>
              <i className="ti-plus" />
            </button>
          </div>
        </div>
        {/*/ End Input Order */}
      </td>
      <td className="total-amount" data-title="Total">
        <span>${product.price * product.count}</span>
      </td>
      <td className="action" data-title="Remove">
        <a style={{ cursor: 'pointer' }} onClick={() => deleteProductCart(product.id)}>
          <i className="ti-trash remove-icon" />
        </a>
      </td>
    </tr>
  )
}
