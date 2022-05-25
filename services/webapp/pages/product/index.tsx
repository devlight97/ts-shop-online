import type { NextPage } from 'next'
import { HeadTag, MainLayout, ProductView, PaginationBar } from '@components'

const ProductPage: NextPage = () => {
  const Main: React.FC = () => (
    <div>
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Product List</h2>
              </div>
            </div>
          </div>
          <PaginationBar pageQuantity={8} />
          <ProductView />
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
      <HeadTag title="Product Page" />
      <div className="js">
        <div>
          <MainLayout render={() => <Main />} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
