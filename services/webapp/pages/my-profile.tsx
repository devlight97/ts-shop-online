import type { NextPage } from 'next'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { HeadTag, MainLayout } from '@components'
import { useModelProvider } from '@models/model.provider'
import { useInput } from 'common/hooks/use-input'

const MyProfilePage: NextPage = observer(() => {
  const { authModel: { currentUser } } = useModelProvider()
  const { firstName, lastName, imageUrl, address, email, phoneNumber } = currentUser || {}



  const Main: React.FC = () => {
    const text = useInput('')
    console.log(text)
    return (
      <div>
        {/* Start Contact */}
        <section id="contact-us" className="contact-us section">
          <div className="container">
            <div className="contact-head">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="form-main">
                    <div className="title">
                      <h4>Eshoper</h4>
                      <h3>Your Profile</h3>
                    </div>
                    <form className="form" method="post">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label>
                              First Name<span>*</span>
                            </label>
                            <input onChange={text.onChange} value={text.value || firstName} type="text" placeholder="placeholder" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label>
                              Last Name<span>*</span>
                            </label>
                            <input name="subject" type="text" value={lastName} placeholder="placeholder" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label>
                              Your Email<span>*</span>
                            </label>
                            <input name="email" type="email" value={`${email}`} placeholder="placeholder" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label>
                              Your Phone<span>*</span>
                            </label>
                            <input name="phone_number" value={phoneNumber} type="text" placeholder="placeholder" />
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
                              SAVE
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
                      <ul>
                        <img style={{ borderRadius: 5 }} src={imageUrl || 'https://forums.bikeride.com/uploads/avatars/avatar.png'} alt="avatar" />
                      </ul>
                      <br />
                      <h4 className="title">{firstName || 'Unknowed'} {lastName || 'Unknowed'}</h4>
                    </div>
                    <div className="single-info">
                      <i className="fa fa-phone" />
                      <h4 className="title">Phone number:</h4>
                      <ul>
                        <li>+123 456-789-1120</li>
                      </ul>
                    </div>
                    <div className="single-info">
                      <i className="fa fa-envelope-open" />
                      <h4 className="title">Email:</h4>
                      <ul>
                        <li>
                          <a href={`https://${email}`}>{email}</a>
                        </li>
                      </ul>
                    </div>
                    <div className="single-info">
                      <i className="fa fa-location-arrow" />
                      <h4 className="title">Address:</h4>
                      <ul>
                        <li>{address || 'Unknowed'}</li>
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
  }

  return (
    <div>
      <HeadTag title="Contact Page" />
      <MainLayout render={() => <Main />} />
    </div>
  )
})

export default MyProfilePage
