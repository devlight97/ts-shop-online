import { IProductCart } from 'interfaces/product.interface'
import { CartItem } from './CartItem'

interface IProps {
  products: IProductCart[]
}

export const CartView: React.FC<IProps> = ({ products }) => {
  return (
    <table className="table shopping-summery">
      <thead>
        <tr className="main-hading">
          <th>PRODUCT</th>
          <th>NAME</th>
          <th className="text-center">UNIT PRICE</th>
          <th className="text-center">QUANTITY</th>
          <th className="text-center">TOTAL</th>
          <th className="text-center">
            <i className="ti-trash remove-icon" />
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  )
}
