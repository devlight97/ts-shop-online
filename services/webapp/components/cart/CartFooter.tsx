import { useModelProvider } from '@models/model.provider'
import Link from 'next/link'

export const CartFooter: React.FC = () => {
  const {
    cartModel: { totalPrice, updateCart, hasDataToBeUpdate },
  } = useModelProvider()

  const handleClickApply = (evt: any) => {
    evt.preventDefault()
    updateCart()
  }
  return (
    <div className="total-amount">
      <div className="row">
        <div className="col-lg-8 col-md-5 col-12">
          <div className="left">
            <div className="coupon">
              <form>
                <input name="Coupon" placeholder="Enter Your Coupon" />
                <button className="btn" onClick={handleClickApply}>Apply</button>
                {hasDataToBeUpdate ? 'should update' : 'no update'}
              </form>
            </div>
            <div className="checkbox">
              <label className="checkbox-inline" htmlFor="2">
                <input name="news" id="2" type="checkbox" /> Shipping (+10$)
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-7 col-12">
          <div className="right">
            <ul>
              <li>
                Cart Subtotal<span>${totalPrice}</span>
              </li>
              <li>
                Shipping<span>Free</span>
              </li>
              <li>
                You Save<span>$0</span>
              </li>
              <li className="last">
                You Pay<span>${totalPrice}</span>
              </li>
            </ul>
            <div className="button5">
              <Link href="/checkout">
                <a href="#" className="btn">
                  Checkout
                </a>
              </Link>
              <Link href="/product">
                <a href="#" className="btn">
                  Continue shopping
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
