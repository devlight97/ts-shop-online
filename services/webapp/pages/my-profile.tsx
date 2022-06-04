import type { NextPage } from 'next'
import { observer } from 'mobx-react-lite';
import React from 'react';

import { HeadTag, MainLayout } from '@components';

const MyProfilePage: NextPage = observer(() => {
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
                    <a href="blog-single.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/* Start Contact */}
      <section id="contact-us" className="contact-us section">
        <div className="container">
          <div className="contact-head">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h4>Get in touch</h4>
                    <h3>Write us a message</h3>
                  </div>
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Name<span>*</span>
                          </label>
                          <input name="name" type="text" placeholder="placeholder" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Subjects<span>*</span>
                          </label>
                          <input name="subject" type="text" placeholder="placeholder" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Email<span>*</span>
                          </label>
                          <input name="email" type="email" placeholder="placeholder" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Phone<span>*</span>
                          </label>
                          <input name="company_name" type="text" placeholder="placeholder" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <label>
                            your message<span>*</span>
                          </label>
                          <textarea name="message" placeholder="placeholder" defaultValue={''} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn ">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <div className="single-info">
                    <i className="fa fa-phone" />
                    <h4 className="title">Call us Now:</h4>
                    <ul>
                      <li>+123 456-789-1120</li>
                      <li>+522 672-452-1120</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-envelope-open" />
                    <h4 className="title">Email:</h4>
                    <ul>
                      <li>
                        <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
                      </li>
                      <li>
                        <a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-location-arrow" />
                    <h4 className="title">Our Address:</h4>
                    <ul>
                      <li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Contact */}
      {/* Map Section */}
      <div className="map-section">
        <div id="myMap" />
      </div>
      {/*/ End Map Section */}
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
    </div>
  )

  return (
    <div>
      <HeadTag title="Contact Page" />
      <MainLayout render={() => <Main />} />
    </div>
  )
})

export default MyProfilePage
