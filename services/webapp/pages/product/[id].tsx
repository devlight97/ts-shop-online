import * as React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import parseHtml from 'html-react-parser'

import { HeadTag, MainLayout } from '@components'
import { productService } from '@services'

const ProductDetailPage: NextPage = () => {
  const router = useRouter()
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    if (!router.isReady) {
      return
    }

    const initComponent = async () => {
      const product = await productService.getById(parseInt(router.query.id as string))
      setProduct(product)
    }

    initComponent()
  }, [router.isReady])

  console.log(product?.post?.content)

  const Main: React.FC = () => (
    <section className="blog-single section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="blog-single-main">
              <div className="row">
                <div className="col-12">
                  <div className="image">
                    <img src={product?.post?.pictureUrl || 'https://via.placeholder.com/950x460'} alt="#" />
                  </div>
                  <div className="blog-detail">
                    <h2 className="blog-title">{product?.post?.title}</h2>
                    <div className="blog-meta">
                      <span className="author">
                        <a href="#">
                          <i className="fa fa-user" />
                          By Admin
                        </a>
                        <a href="#">
                          <i className="fa fa-calendar" />
                          Dec 24, 2018
                        </a>
                        <a href="#">
                          <i className="fa fa-comments" />
                          Comment (15)
                        </a>
                      </span>
                    </div>
                    <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
                      {parseHtml(product?.post?.content || '')}
                    </div>
                  </div>
                  <div className="share-social">
                    <div className="row">
                      <div className="col-12">
                        <div className="content-tags">
                          <h4>Tags:</h4>
                          <ul className="tag-inner">
                            <li>
                              <a href="#">Glass</a>
                            </li>
                            <li>
                              <a href="#">Pant</a>
                            </li>
                            <li>
                              <a href="#">t-shirt</a>
                            </li>
                            <li>
                              <a href="#">swater</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="comments">
                    <h3 className="comment-title">Comments (3)</h3>
                    {/* Single Comment */}
                    <div className="single-comment">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div className="content">
                        <h4>
                          Alisa harm <span>At 8:59 pm On Feb 28, 2018</span>
                        </h4>
                        <p>
                          Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation
                          collaboration Phosfluorescently leverage others enterprisee Phosfluorescently leverage.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">
                            <i className="fa fa-reply" aria-hidden="true" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single Comment */}
                    {/* Single Comment */}
                    <div className="single-comment left">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div className="content">
                        <h4>
                          john deo <span>Feb 28, 2018 at 8:59 pm</span>
                        </h4>
                        <p>
                          Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation
                          collaboration Phosfluorescently leverage others enterprisee Phosfluorescently leverage.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">
                            <i className="fa fa-reply" aria-hidden="true" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single Comment */}
                    {/* Single Comment */}
                    <div className="single-comment">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div className="content">
                        <h4>
                          megan mart <span>Feb 28, 2018 at 8:59 pm</span>
                        </h4>
                        <p>
                          Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation
                          collaboration Phosfluorescently leverage others enterprisee Phosfluorescently leverage.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">
                            <i className="fa fa-reply" aria-hidden="true" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single Comment */}
                  </div>
                </div>
                <div className="col-12">
                  <div className="reply">
                    <div className="reply-head">
                      <h2 className="reply-title">Leave a Comment</h2>
                      {/* Comment Form */}
                      <form className="form" action="#">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                              <label>
                                Your Name<span>*</span>
                              </label>
                              <input type="text" name="name" placeholder="placeholder" required />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                              <label>
                                Your Email<span>*</span>
                              </label>
                              <input type="email" name="email" placeholder="placeholder" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label>
                                Your Message<span>*</span>
                              </label>
                              <textarea name="message" placeholder="placeholder" defaultValue={''} />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group button">
                              <button type="submit" className="btn">
                                Post comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* End Comment Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="main-sidebar">
              {/* Single Widget */}
              <div className="single-widget search">
                <div className="form">
                  <input type="email" placeholder="Search Here..." />
                  <a className="button" href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              {/*/ End Single Widget */}
              {/* Single Widget */}
              <div className="single-widget category">
                <h3 className="title">Blog Categories</h3>
                <ul className="categor-list">
                  <li>
                    <a href="#">Men's Apparel</a>
                  </li>
                  <li>
                    <a href="#">Women's Apparel</a>
                  </li>
                  <li>
                    <a href="#">Bags Collection</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Sun Glasses</a>
                  </li>
                </ul>
              </div>
              {/*/ End Single Widget */}
              {/* Single Widget */}
              <div className="single-widget recent-post">
                <h3 className="title">Recent post</h3>
                {/* Single Post */}
                <div className="single-post">
                  <div className="image">
                    <img src="https://eng.ox.ac.uk/media/1902/coding-1853305_1280.jpg?anchor=center&mode=crop&width=950&height=460&rnd=132457777930000000" alt="#" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="/product/1">
                        <a href="#">Top 10 Beautyful Women Dress in the world</a>
                      </Link>
                    </h5>
                    <ul className="comment">
                      <li>
                        <i className="fa fa-calendar" aria-hidden="true" />
                        Jan 11, 2020
                      </li>
                      <li>
                        <i className="fa fa-commenting-o" aria-hidden="true" />
                        35
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Post */}
                {/* Single Post */}
                <div className="single-post">
                  <div className="image">
                    <img src="https://www.4lifeinnovations.com/wp-content/uploads/2019/02/Thumbnail-ff-1.jpg" alt="#" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="/product/5">
                        <a href="#">Top 10 Beautyful Women Dress in the world</a>
                      </Link>
                    </h5>
                    <ul className="comment">
                      <li>
                        <i className="fa fa-calendar" aria-hidden="true" />
                        Mar 05, 2019
                      </li>
                      <li>
                        <i className="fa fa-commenting-o" aria-hidden="true" />
                        59
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Post */}
                {/* Single Post */}
                <div className="single-post">
                  <div className="image">
                    <img src="https://images.hepsiburada.net/assets/Bilgisayar/ProductDesc/asus-tp300ld-3.jpg" alt="#" />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="/product/11">
                        <a href="#">Top 10 Beautyful Women Dress in the world</a>
                      </Link>
                    </h5>
                    <ul className="comment">
                      <li>
                        <i className="fa fa-calendar" aria-hidden="true" />
                        June 09, 2019
                      </li>
                      <li>
                        <i className="fa fa-commenting-o" aria-hidden="true" />
                        44
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Post */}
              </div>
              {/*/ End Single Widget */}
              {/* Single Widget */}
              {/*/ End Single Widget */}
              {/* Single Widget */}
              <div className="single-widget side-tags">
                <h3 className="title">Tags</h3>
                <ul className="tag">
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">wordpress</a>
                  </li>
                  <li>
                    <a href="#">html</a>
                  </li>
                  <li>
                    <a href="#">multipurpose</a>
                  </li>
                  <li>
                    <a href="#">education</a>
                  </li>
                  <li>
                    <a href="#">template</a>
                  </li>
                  <li>
                    <a href="#">Ecommerce</a>
                  </li>
                </ul>
              </div>
              {/*/ End Single Widget */}
              {/* Single Widget */}
              <div className="single-widget newsletter">
                <h3 className="title">Newslatter</h3>
                <div className="letter-inner">
                  <h4>
                    Subscribe &amp; get news <br /> latest updates.
                  </h4>
                  <div className="form-inner">
                    <input type="email" placeholder="Enter your email" />
                    <a href="#">Submit</a>
                  </div>
                </div>
              </div>
              {/*/ End Single Widget */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div>
      <HeadTag title={`Product ID: ${product ? product.id : null}`} />
      <MainLayout render={() => <Main />} />
    </div>
  )
}

export default ProductDetailPage
