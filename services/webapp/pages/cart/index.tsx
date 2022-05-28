import React from 'react'
import type { NextPage } from 'next'

import { CartFooter, CartView, HeadTag, MainLayout } from '@components'

import { useModelProvider } from 'models/model.provider'
import { observer } from 'mobx-react-lite'

const CartPage: NextPage = observer(() => {
  const {
    cartModel: { products },
  } = useModelProvider()

  const Main: React.FC = () => (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-inner">
                <ul className="bread-list">
                  <li>
                    <a href="index1.html">
                      Home
                      <i className="ti-arrow-right" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="blog-single.html">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/* Shopping Cart */}
      <div className="shopping-cart section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Shopping Summery */}
              <CartView products={products} />
              {/*/ End Shopping Summery */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Total Amount */}
              <CartFooter />
              {/*/ End Total Amount */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Shopping Cart */}
      {/* Start Shop Services Area  */}
      <section className="shop-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-rocket" />
                <h4>Free shiping</h4>
                <p>Orders over $100</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-reload" />
                <h4>Free Return</h4>
                <p>Within 30 days returns</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-lock" />
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-tag" />
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Newsletter */}
      {/* Start Shop Newsletter  */}
      <section className="shop-newsletter section">
        <div className="container">
          <div className="inner-top">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-12">
                {/* Start Newsletter Inner */}
                <div className="inner">
                  <h4>Newsletter</h4>
                  <p>
                    {' '}
                    Subscribe to our newsletter and get <span>10%</span> off your first purchase
                  </p>
                  <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                    <input name="EMAIL" placeholder="Your email address" required type="email" />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
                {/* End Newsletter Inner */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Newsletter */}
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="ti-close" aria-hidden="true" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  {/* Product Slider */}
                  <div className="product-gallery">
                    <div className="quickview-slider-active">
                      <div className="single-slider">
                        <img src="images/modal1.jpg" alt="#" />
                      </div>
                      <div className="single-slider">
                        <img src="images/modal2.jpg" alt="#" />
                      </div>
                      <div className="single-slider">
                        <img src="images/modal3.jpg" alt="#" />
                      </div>
                      <div className="single-slider">
                        <img src="images/modal4.jpg" alt="#" />
                      </div>
                    </div>
                  </div>
                  {/* End Product slider */}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="quickview-content">
                    <h2>Flared Shift Dress</h2>
                    <div className="quickview-ratting-review">
                      <div className="quickview-ratting-wrap">
                        <div className="quickview-ratting">
                          <i className="yellow fa fa-star" />
                          <i className="yellow fa fa-star" />
                          <i className="yellow fa fa-star" />
                          <i className="yellow fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <a href="#"> (1 customer review)</a>
                      </div>
                      <div className="quickview-stock">
                        <span>
                          <i className="fa fa-check-circle-o" /> in stock
                        </span>
                      </div>
                    </div>
                    <h3>$29.00</h3>
                    <div className="quickview-peragraph">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit
                        pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.
                      </p>
                    </div>
                    <div className="size">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <h5 className="title">Size</h5>
                          <select>
                            <option selected>s</option>
                            <option>m</option>
                            <option>l</option>
                            <option>xl</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-12">
                          <h5 className="title">Color</h5>
                          <select>
                            <option selected>orange</option>
                            <option>purple</option>
                            <option>black</option>
                            <option>pink</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">
                      {/* Input Order */}
                      <div className="input-group">
                        <div className="button minus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            disabled
                            data-type="minus"
                            data-field="quant[1]"
                          >
                            <i className="ti-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          className="input-number"
                          data-min={1}
                          data-max={1000}
                          defaultValue={1}
                        />
                        <div className="button plus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                          >
                            <i className="ti-plus" />
                          </button>
                        </div>
                      </div>
                      {/*/ End Input Order */}
                    </div>
                    <div className="add-to-cart">
                      <a href="#" className="btn">
                        Add to cart
                      </a>
                      <a href="#" className="btn min">
                        <i className="ti-heart" />
                      </a>
                      <a href="#" className="btn min">
                        <i className="fa fa-compress" />
                      </a>
                    </div>
                    <div className="default-social">
                      <h4 className="share-now">Share:</h4>
                      <ul>
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="youtube" href="#">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a className="dribbble" href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <HeadTag title="Cart Page" />
      <MainLayout render={() => <Main />} />
    </div>
  )
})

export default CartPage
