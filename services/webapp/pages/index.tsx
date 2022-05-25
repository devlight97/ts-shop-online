import type { NextPage } from 'next'
import * as React from 'react'

import { MainLayout, HeadTag } from '@components'

const Home: NextPage = () => {
  const Main: React.FC = () => (
    <div>
      <section className="hero-slider">
        {/* Single Slider */}
        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1>
                          <span>UP TO 50% OFF </span>Shirt For Man
                        </h1>
                        <p>
                          Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri{' '}
                          <br /> odiy maboriosm.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">
                            Shop Now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
      </section>
      {/*/ End Slider Area */}
      {/* Start Small Banner  */}
      <section className="small-banner section">
        <div className="container-fluid">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br /> collection
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br /> 2020
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br /> Up to <span>40%</span> Off
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
      {/* End Small Banner */}
      {/* Start Product Area */}
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">
                  {/* Tab Nav */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#man" role="tab">
                        Man
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#women" role="tab">
                        Woman
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#kids" role="tab">
                        Kids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#accessories" role="tab">
                        Accessories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#essential" role="tab">
                        Essential
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#prices" role="tab">
                        Prices
                      </a>
                    </li>
                  </ul>
                  {/*/ End Tab Nav */}
                </div>
                <div className="tab-content" id="myTabContent">
                  {/* Start Single Tab */}
                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Hot Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Pink Show</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Pant Collectons</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Cap For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Polo Dress For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Black Sunglass For Women</a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Tab */}
                  {/* Start Single Tab */}
                  <div className="tab-pane fade" id="women" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Hot Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Pink Show</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Pant Collectons</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Cap For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Polo Dress For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Black Sunglass For Women</a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Tab */}
                  {/* Start Single Tab */}
                  <div className="tab-pane fade" id="kids" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Hot Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Pink Show</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Pant Collectons</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Cap For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Polo Dress For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Black Sunglass For Women</a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Tab */}
                  {/* Start Single Tab */}
                  <div className="tab-pane fade" id="accessories" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Hot Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Pink Show</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Pant Collectons</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Cap For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Polo Dress For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Black Sunglass For Women</a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Tab */}
                  {/* Start Single Tab */}
                  <div className="tab-pane fade" id="essential" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Hot Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Pink Show</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Pant Collectons</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Cap For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Polo Dress For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Black Sunglass For Women</a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Tab */}
                  {/* Start Single Tab */}
                  <div className="tab-pane fade" id="prices" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Hot Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Pink Show</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Women Pant Collectons</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Bags Collection</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Awesome Cap For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Polo Dress For Women</a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
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
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">Black Sunglass For Women</a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Single Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Area */}
      {/* Start Midium Banner  */}
      <section className="midium-banner">
        <div className="container">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Man's items <br />
                    Up to<span> 50%</span>
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>shoes women</p>
                  <h3>
                    mid season <br /> up to <span>70%</span>
                  </h3>
                  <a href="#" className="btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
      {/* End Midium Banner */}
      {/* Start Most Popular */}
      <div className="product-area most-popular section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Hot Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel popular-slider">
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <span className="out-of-stock">Hot</span>
                    </a>
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
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Black Sunglass For Women</a>
                    </h3>
                    <div className="product-price">
                      <span className="old">$60.00</span>
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    </a>
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
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Women Hot Collection</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <span className="new">New</span>
                    </a>
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
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Awesome Pink Show</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    </a>
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
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Awesome Bags Collection</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Most Popular Area */}
      <section className="section free-version-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 offset-md-2 col-xs-12">
              <div className="section-title mb-60">
                <span
                  className="text-white wow fadeInDown"
                  data-wow-delay=".2s"
                  style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInDown' }}
                >
                  Eshop Free Lite version
                </span>
                <h2
                  className="text-white wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                >
                  Currently You are using free
                  <br /> lite Version of Eshop.
                </h2>
                <p
                  className="text-white wow fadeInUp"
                  data-wow-delay=".6s"
                  style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}
                >
                  Please, purchase full version of the template to get all pages,
                  <br /> features and commercial license.
                </p>
                <div className="button">
                  <a
                    href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/"
                    target="_blank"
                    rel="nofollow"
                    className="btn wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Shop Home List  */}
      <section className="shop-home-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h4>
                      <p className="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Home List  */}
      {/* Start Shop Blog  */}
      <section className="shop-blog section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July , 2020. Monday</p>
                  <a href="#" className="title">
                    Sed adipiscing ornare.
                  </a>
                  <a href="#" className="more-btn">
                    Continue Reading
                  </a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">
                    Man’s Fashion Winter Sale
                  </a>
                  <a href="#" className="more-btn">
                    Continue Reading
                  </a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">
                    Women Fashion Festive
                  </a>
                  <a href="#" className="more-btn">
                    Continue Reading
                  </a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Blog  */}
      {/* Start Shop Services Area */}
      <section className="shop-services section home">
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
      {/* End Shop Services Area */}
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
                <div className="col-lg-6 offset-lg-3 col-12">
                  <h4
                    style={{
                      marginTop: '100px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#F7941D',
                      display: 'block',
                      marginBottom: '5px',
                    }}
                  >
                    Eshop Free Lite
                  </h4>
                  <h3 style={{ fontSize: '30px', color: '#333' }}>
                    Currently You are using free lite Version of Eshop.
                  </h3>
                  <h3>
                    <p
                      style={{
                        display: 'block',
                        marginTop: '20px',
                        color: '#888',
                        fontSize: '14px',
                        fontWeight: 400,
                      }}
                    >
                      Please, purchase full version of the template to get all pages, features and commercial license
                    </p>
                    <div className="button" style={{ marginTop: '30px' }}>
                      <a
                        href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/"
                        target="_blank"
                        className="btn"
                        style={{ color: '#fff' }}
                      >
                        Buy Now!
                      </a>
                    </div>
                  </h3>
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
      <HeadTag title='Home Page' />
      <MainLayout render={() => <Main />} />
    </div>
  )
}

export default Home
